import { Test, TestingModule } from '@nestjs/testing';
import { FibController } from './fib.controller';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { FibService } from './fib.service';

describe('FibController', () => {
  let controller: FibController;
  let service: FibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FibController],
      providers: [FibService], // Add FibService here
    }).compile();

    controller = module.get<FibController>(FibController);
    service = module.get<FibService>(FibService); // Initialize the service
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the correct Fibonacci number', async () => {
    jest.spyOn(service, 'getFib').mockResolvedValue(55);
    const result = await controller.getFib(10);
    expect(result).toEqual({ result: 55 });
  });

  it('should throw BadRequestException for non-integer input', async () => {
    await expect(controller.getFib(NaN)).rejects.toThrow(BadRequestException);
  });

  it('should throw BadRequestException for negative input', async () => {
    await expect(controller.getFib(-1)).rejects.toThrow(BadRequestException);
  });

  it('should throw InternalServerErrorException for service errors', async () => {
    jest.spyOn(service, 'getFib').mockRejectedValue(new Error('Service error'));
    await expect(controller.getFib(5)).rejects.toThrow(
      InternalServerErrorException,
    );
  });
});
