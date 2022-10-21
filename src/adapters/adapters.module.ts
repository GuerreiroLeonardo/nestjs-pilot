import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentSchema } from 'src/adapters/repositories/models/Payment.schema';
import { PaymentsController } from './controllers/payments.controller';
import { PaymentRepository } from './repositories/mongodb/PaymentRepository';
import { CreatePayment } from 'src/usecases/CreatePayment/CreatePayment';
import { Payment } from 'src/domain/entities/payment/Payment';
import { ChangePaymentStatus } from 'src/usecases/ChangePaymentStatus/ChangePaymentStatus';

dotenv.config();
const IPaymentRepository = {
  provide: 'IPaymentRepository',
  useClass: PaymentRepository,
};

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MongoDb__Connection),
    MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
  ],
  providers: [ChangePaymentStatus, CreatePayment, IPaymentRepository],
  controllers: [PaymentsController],
  exports: [IPaymentRepository],
})
export class AdaptersModule {}
