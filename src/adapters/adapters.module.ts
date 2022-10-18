import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from 'src/domain/models/PaymentModel';
import { PaymentsController } from './controllers/payments.controller';
import { PaymentRepository } from './repositories/mongodb/PaymentRepository';
import * as dotenv from 'dotenv';
import { ProcessPayment } from 'src/usecases/process-payment/ProcessPayment';

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
