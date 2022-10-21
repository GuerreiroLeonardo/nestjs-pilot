import { InvalidPaymentError } from 'src/domain/entities/errors/InvalidPayment';
import { Payment } from 'src/domain/entities/payment/Payment';
import { Either } from './../../shared/either';

export type ProcessPaymentResponse = Either<InvalidPaymentError, Payment>;
