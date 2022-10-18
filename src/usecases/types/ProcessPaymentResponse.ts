import { PaymentDTO } from 'src/domain/dto/PaymentDTO';
import { InvalidPaymentError } from 'src/domain/entities/payment/errors/InvalidPayment';
import { Either } from './../../shared/either';

export type ProcessPaymentResponse = Either<InvalidPaymentError, PaymentDTO>;
