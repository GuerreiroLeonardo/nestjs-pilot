import { PaymentDocument } from 'src/adapters/repositories/models/Payment.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateQuery } from 'mongoose';
import { Payment } from 'src/domain/entities/payment/Payment';
import { IPaymentRepository } from '../interfaces/IPaymentRepository';

@Injectable()
export class PaymentRepository implements IPaymentRepository {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>,
  ) {}

  async create(paymentData: Payment): Promise<Payment | null> {
    const entity = new this.paymentModel(paymentData);
    return await entity.save();
  }

  async update(
    id: string,
    updateData: UpdateQuery<Document>,
  ): Promise<Payment> {
    const filterQuery = { _id: id };
    const result = await this.paymentModel.findOneAndUpdate(
      filterQuery,
      updateData,
    );
    console.log(result);
    return;
  }
  //   async findById(id: string): Promise<Payment> {
  //     // const result = await this.paymentModel.find({ _id: id }).exec();
  //     // const mixedUser = plainToClass(Payment, result[0]['_doc']);
  //     // console.log(mixedUser);
  //     return;
  //   }

  //   search(
  //     entityFilterQuery?: FilterQuery<Payment>,
  //   ): Promise<Array<Payment> | null> {
  //     return [];
  //   }
}
