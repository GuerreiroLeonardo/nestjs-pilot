import { Payment, PaymentStatus } from 'src/domain/entities/payment/Payment';
import { Inject } from '@nestjs/common';
import { IPaymentRepository } from 'src/adapters/repositories/interfaces/IPaymentRepository';

export class ChangePaymentStatus {
  payment: Payment;
  constructor(
    @Inject('IPaymentRepository')
    private readonly _repository: IPaymentRepository,
  ) {}

  async changeStatus(id: string, status: PaymentStatus): Promise<void> {
    const data = { status: status };
    const result = await this._repository.update(id, data);
    console.log(result);
    return;
  }
}
