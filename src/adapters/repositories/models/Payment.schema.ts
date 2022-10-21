import mongoose from 'mongoose';
import {
  Payment,
  PaymentProvider,
  PaymentStatus,
  PaymentType,
} from 'src/domain/entities/payment/Payment';
import { DefaultSchemaOptions } from './schema-options.schema';
import { Document } from 'mongoose';

export type PaymentDocument = Payment & Document;

export const PaymentSchema = new mongoose.Schema(
  {
    amount: { required: true, type: Number, alias: '_amount' },
    provider: {
      required: true,
      type: String,
      enum: PaymentProvider,
      alias: '_provider',
    },
    type: { required: true, type: String, enum: PaymentType, alias: '_type' },
    status: {
      required: true,
      type: String,
      enum: PaymentStatus,
      alias: '_status',
    },
    createdAt: {
      required: true,
      default: new Date(),
      type: Date,
      alias: '_createdAt',
    },
  },
  DefaultSchemaOptions,
);
