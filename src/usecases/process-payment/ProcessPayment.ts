import { EPayment } from 'src/domain/entities/payment/EPayment';
import { Either, left, right } from 'src/shared/either';
import { ProcessPaymentResponse } from '../types/ProcessPaymentResponse';
import { InvalidPaymentError } from 'src/domain/entities/payment/errors/InvalidPayment';
import { PaymentDTO, PaymentStatus } from 'src/domain/dto/PaymentDTO';
import { PaymentRepository } from 'src/adapters/repositories/mongodb/PaymentRepository';
import { Inject } from '@nestjs/common';

export class ProcessPayment {
  payment: EPayment;
  repository: PaymentRepository;
  constructor(
    @Inject('IPaymentRepository') private paymentRepository: PaymentRepository,
  ) {
    this.repository = paymentRepository;
  }

  async createPayment(paymentDTO: PaymentDTO): Promise<ProcessPaymentResponse> {
    const paymentOrError: Either<InvalidPaymentError, EPayment> =
      EPayment.create(paymentDTO);

    if (paymentOrError.isLeft()) {
      return left(paymentOrError.value);
    }

    await this.repository.create(paymentOrError.value);

    return right(paymentDTO);
  }

  async changePaymentStatus(id: string, status: PaymentStatus): Promise<void> {
    const result = await this.repository.findOne(id);

    return;
  }
}
