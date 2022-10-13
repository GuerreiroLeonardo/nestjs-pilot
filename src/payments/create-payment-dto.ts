import { PaymentType } from '../domain/entities/payment';

export class CreatePaymentDTO {
  type: PaymentType;
  amount: number;
  provider: string;
}
