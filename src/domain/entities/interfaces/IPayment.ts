import {
  PaymentProvider,
  PaymentStatus,
  PaymentType,
} from '../payment/Payment';

export interface IPayment {
  amount: number;
  provider: PaymentProvider;
  type: PaymentType;
  status: PaymentStatus;
}

// export class PaymentDTO {
//   // here should go the schema definition for the database
//   amount: number;
//   provider: PaymentProvider;
//   type: PaymentType;
//   status: PaymentStatus;
//   constructor(
//     amount: number,
//     provider: PaymentProvider,
//     type: PaymentType,
//     status: PaymentStatus,
//   ) {
//     this.amount = amount;
//     this.provider = provider;
//     this.type = type;
//     this.status = status;
//   }
// }
