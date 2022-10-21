import { Payment } from 'src/domain/entities/payment/Payment';
import { right } from 'src/shared/either';
import { ProcessPaymentResponse } from '../types/ProcessPaymentResponse';
import { Inject } from '@nestjs/common';
import { IPaymentRepository } from 'src/adapters/repositories/interfaces/IPaymentRepository';

export class CreatePayment {
  payment: Payment;
  constructor(
    @Inject('IPaymentRepository')
    private readonly _repository: IPaymentRepository,
  ) {}

  async creatPayment(entity: Payment): Promise<ProcessPaymentResponse> {
    const payment = new Payment({
      amount: entity.amount,
      provider: entity.provider,
      type: entity.type,
      status: entity.status,
      createdAt: new Date(),
    });

    await this._repository.create(payment);

    return right(payment);
  }
}
