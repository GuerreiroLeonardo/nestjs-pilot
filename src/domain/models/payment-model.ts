import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PaymentDocument = Payment & Document;
// for field definitions consult: https://docs.nestjs.com/techniques/mongodb
@Schema()
export class Payment {
  @Prop()
  amount: number;

  @Prop()
  provider: string;

  @Prop()
  type: string;

  @Prop({ required: true, type: Date, default: Date.now })
  createdAt: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
