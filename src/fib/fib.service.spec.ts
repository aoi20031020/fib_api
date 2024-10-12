import { Test, TestingModule } from '@nestjs/testing';
import { FibService } from './fib.service';

describe('FibService', () => {
  let service: FibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FibService],
    }).compile();

    service = module.get<FibService>(FibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return 0 for input 0', async () => {
    const result = await service.getFib(0);
    expect(result).toBe(0);
  });

  it('should return 1 for input 1', async () => {
    const result = await service.getFib(1);
    expect(result).toBe(1);
  });

  it('should return 55 for input 10', async () => {
    const result = await service.getFib(10);
    expect(result).toBe(55);
  });

  it('should return 6765 for input 20', async () => {
    const result = await service.getFib(20);
    expect(result).toBe(6765);
  });
});
