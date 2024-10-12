import { Injectable } from '@nestjs/common';

@Injectable()
export class FibService {
  async getFib(n: number): Promise<number> {
    if (n <= 1) {
      return n;
    }

    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp;
    }

    return b;
  }
}
