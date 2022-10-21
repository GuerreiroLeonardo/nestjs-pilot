// import { Payment, PaymentStatus } from 'src/domain/entities/payment/Payment';
// import { Inject } from '@nestjs/common';
// import { IPaymentRepository } from 'src/adapters/repositories/interfaces/IPaymentRepository';

// export class ChangPaymentStatus {
//   payment: Payment;
//   constructor(
//     @Inject('IPaymentRepository')
//     private readonly _repository: IPaymentRepository,
//   ) {}

//   async changPaymentStatus(id: string, status: PaymentStatus): Promise<void> {
//     const result = await this._repository.findById(id);

//     return;
//   }
// }
