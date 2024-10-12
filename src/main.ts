import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as serverlessExpress from 'aws-serverless-express';
import { Handler } from 'aws-lambda';

const expressApp = express();

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );
  await app.init();
}

let cachedServer: Handler;

async function createLambdaServer() {
  await bootstrap();
  return serverlessExpress.createServer(expressApp);
}

export const handler: Handler = async (event, context) => {
  if (!cachedServer) {
    cachedServer = await createLambdaServer();
  }
  return serverlessExpress.proxy(cachedServer, event, context);
};
