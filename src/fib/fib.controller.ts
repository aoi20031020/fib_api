import {
  BadRequestException,
  Controller,
  Get,
  InternalServerErrorException,
  Query,
} from '@nestjs/common';
import { FibService } from './fib.service';

@Controller('fib')
export class FibController {
  constructor(private readonly fibService: FibService) {}
  @Get()
  async getFib(@Query('n') n): Promise<{ result: number }> {
    console.log('n:', n);
    try {
      if (isNaN(n)) {
        console.log('The query parameter must be a integer');
        throw new BadRequestException();
      } else {
        n = parseInt(n);
      }
      if (n < 1) {
        console.log('The query parameter must be a positive integer');
        throw new BadRequestException();
      }
      const fib = await this.fibService.getFib(n);
      return { result: fib };
    } catch (error) {
      if (error instanceof BadRequestException) {
        console.log('error:', error);
        throw new BadRequestException();
      }
      console.log('InternalServerError');
      throw new InternalServerErrorException();
    }
  }
}
