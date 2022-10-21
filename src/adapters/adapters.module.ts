import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentSchema } from 'src/adapters/repositories/models/Payment.schema';
import { PaymentsController } from './controllers/payments.controller';
import { PaymentRepository } from './repositories/mongodb/PaymentRepository';
import * as dotenv from 'dotenv';
import { ProcessPayment } from 'src/usecases/process-payment/CreatePayment';
import { Payment } from 'src/domain/entities/payment/Payment';

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
  providers: [ProcessPayment, IPaymentRepository],
  controllers: [PaymentsController],
  exports: [IPaymentRepository],
})
export class AdaptersModule {}
