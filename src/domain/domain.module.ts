import { Module } from '@nestjs/common';
import { Payment } from './entities/payment/Payment';

@Module({
  imports: [],
  providers: [Payment],
  exports: [Payment],
})
export class DomainModule {}
