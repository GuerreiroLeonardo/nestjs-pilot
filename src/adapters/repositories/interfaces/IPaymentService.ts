import { PaymentStatus } from 'src/domain/entities/payment/Payment';

export abstract class IPaymentService {
  confirmPayment: (id: string, status: PaymentStatus) => boolean;
}
