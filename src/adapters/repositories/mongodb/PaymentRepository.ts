import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaymentDTO } from 'src/domain/dto/PaymentDTO';
import { EPayment } from 'src/domain/entities/payment/EPayment';
import { Payment, PaymentDocument } from 'src/domain/models/PaymentModel';
import { IPaymentRepository } from 'src/usecases/interfaces/IPaymentRepository';
import { plainToClass, plainToClassFromExist } from 'class-transformer';

@Injectable()
export class PaymentRepository implements IPaymentRepository {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>,
  ) {}

  async create(paymentData: EPayment): Promise<Payment | null> {
    const payment = new Payment(paymentData);
    const entity = new this.paymentModel(payment);
    return await entity.save();
  }

  async findOne(id: string): Promise<void> {
    const result = await this.paymentModel.find({ _id: id }).exec();
    const mixedUser = plainToClass(Payment, result[0]['_doc']);
    console.log(mixedUser);
    return;
  }
}
