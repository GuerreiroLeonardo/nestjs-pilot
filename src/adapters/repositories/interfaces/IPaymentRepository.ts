import { FilterQuery, UpdateQuery } from 'mongoose';
import { Payment } from 'src/domain/entities/payment/Payment';

export interface IPaymentRepository {
  create(entity: Payment): Promise<Payment | null>;
  update(id: string, updateEntityData: UpdateQuery<Document>): Promise<Payment>;
  //   findById(id: string): Promise<Payment>;
  //   search(
  //     entityFilterQuery?: FilterQuery<Payment>,
  //   ): Promise<Array<Payment> | null>;
}
