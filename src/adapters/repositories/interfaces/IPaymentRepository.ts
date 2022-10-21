import { FilterQuery } from 'mongoose';
import { Payment } from 'src/domain/entities/payment/Payment';

export interface IPaymentRepository {
  create(entity: Payment): Promise<Payment | null>;
  //   update(entity: Payment): Promise<Payment>;
  //   findById(id: string): Promise<Payment>;
  //   search(
  //     entityFilterQuery?: FilterQuery<Payment>,
  //   ): Promise<Array<Payment> | null>;
}
