import { Module } from '@nestjs/common';
import { FibController } from './fib.controller';
import { FibService } from './fib.service';

@Module({
  imports: [],
  controllers: [FibController],
  providers: [FibService],
})
export class FibModule {}
