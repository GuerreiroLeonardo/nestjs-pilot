import { PaymentStatus } from 'src/domain/dto/PaymentDTO';

export abstract class IPaymentService {
  confirmPayment: (id: string, status: PaymentStatus) => boolean;
}
