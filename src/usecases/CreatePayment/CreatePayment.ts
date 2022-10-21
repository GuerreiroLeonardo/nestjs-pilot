import { Payment } from 'src/domain/entities/payment/Payment';
import { left, right } from 'src/shared/either';
import { ProcessPaymentResponse } from '../types/ProcessPaymentResponse';
import { Inject } from '@nestjs/common';
import { IPaymentRepository } from 'src/adapters/repositories/interfaces/IPaymentRepository';
import { InvalidPaymentError } from 'src/domain/entities/errors/InvalidPayment';

export class CreatePayment {
  payment: Payment;
  constructor(
    @Inject('IPaymentRepository')
    private readonly _repository: IPaymentRepository,
  ) {}

  async creatPayment(entity: Payment): Promise<ProcessPaymentResponse> {
    if (entity.amount <= 0.0) {
      return left(new InvalidPaymentError('amount', entity.amount));
    }

    const payment = new Payment({
      amount: entity.amount,
      provider: entity.provider,
      type: entity.type,
      status: entity.status,
      createdAt: new Date(),
    });

    const result = await this._repository.create(payment);

    return right(result);
  }
}
