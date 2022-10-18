import {
  PaymentDTO,
  PaymentProvider,
  PaymentStatus,
  PaymentType,
} from './../dto/PaymentDTO';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Amount, EPayment } from '../entities/payment/EPayment';
import { Exclude, Transform } from 'class-transformer';

export type PaymentDocument = Payment & Document;
// for field definitions consult: https://docs.nestjs.com/techniques/mongodb
@Schema()
export class Payment {
  @Prop()
  _amount: number;

  @Prop()
  _provider: string;

  @Prop()
  _status: string;

  @Prop()
  _type: string;

  @Prop({ required: true, type: Date, default: Date.now })
  _createdAt: string;

  //   constructor(paymentDTO: EPayment = {} as EPayment) {
  //     this._amount = paymentDTO.amount ? paymentDTO.amount.value : null;
  //     this._provider = paymentDTO.provider ? paymentDTO.provider : null;
  //     this._type = paymentDTO.type ? paymentDTO.type : null;
  //     this._status = paymentDTO.status ? paymentDTO.status : null;
  //   }

  //   //   GETTERS AND SETTERS
  //   setStatus(newStatus: PaymentStatus) {
  //     this._status = newStatus;
  //   }
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
