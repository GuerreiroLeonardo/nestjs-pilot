import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from 'src/domain/models/payment-model';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MongoDb__Connection),
    MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
  ],
})
export class ExternalModule {}
