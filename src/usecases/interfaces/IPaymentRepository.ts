import { EPayment } from 'src/domain/entities/payment/EPayment';
import { Payment } from 'src/domain/models/PaymentModel';

export abstract class IPaymentRepository {
  create: (paymentDTO: EPayment) => Promise<Payment | null>;
}
