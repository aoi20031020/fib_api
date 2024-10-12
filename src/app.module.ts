import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FibModule } from './fib/fib.module';

@Module({
  imports: [FibModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
