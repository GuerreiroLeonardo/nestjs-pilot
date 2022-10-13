import { Body, Controller, Post } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMessage } from 'kafkajs';
import { CreatePaymentDTO } from './create-payment-dto';

@Controller('payments')
export class PaymentsController {
  @MessagePattern('pagamentos')
  processPayment(@Payload() message: KafkaMessage): void {
    console.log(message);
  }

  @Post()
  async create(@Body() createPayment: CreatePaymentDTO) {}
}
