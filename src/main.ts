import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { Handler } from 'aws-lambda';
import * as serverless from 'aws-serverless-express';

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
  return serverless.createServer(expressApp);
}

export const handler: Handler = async (event, context) => {
  if (!cachedServer) {
    cachedServer = await createLambdaServer();
  }
  return serverless.proxy(cachedServer, event, context);
};
