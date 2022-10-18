import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
// import { MessagePattern, Payload } from '@nestjs/microservices';
// import { KafkaMessage } from 'kafkajs';
import { PaymentDTO, PaymentStatus } from 'src/domain/dto/PaymentDTO';
// import { EPayment } from 'src/domain/entities/payment/EPayment';
// import { InvalidPaymentError } from 'src/domain/entities/payment/errors/InvalidPayment';
// import { Either } from 'src/shared/either';
// import { IPaymentRepository } from 'src/usecases/interfaces/IPaymentRepository';
import { ProcessPayment } from 'src/usecases/process-payment/ProcessPayment';
import { ProcessPaymentResponse } from 'src/usecases/types/ProcessPaymentResponse';
// import { PaymentRepository } from '../repositories/mongodb/PaymentRepository';

@Controller('payments')
export class PaymentsController {
  constructor(private processPayment: ProcessPayment) {}
  //   @MessagePattern('pagamentos')
  //   processPayment(
  //     @Payload() message: KafkaMessage,
  //   ): Either<InvalidPaymentError, boolean> {
  //     const payment: paymentDTO = ProcessPayment.createPayment(message);
  //     return true;
  //   }

  //   @Post()
  //   async create(@Body() createPayment: CreatePaymentDTO) {}

  @Post()
  async create(@Body() paymentDTO: PaymentDTO): Promise<string> {
    const payment: ProcessPaymentResponse =
      await this.processPayment.createPayment(paymentDTO);
    console.log(payment);
    return 'This action adds a new cat';
  }

  @Get('approve/:id')
  async get(@Param('id') id: string): Promise<string> {
    const payment: void = await this.processPayment.changePaymentStatus(
      id,
      PaymentStatus.Confirmed,
    );
    console.log(payment);
    return 'This action adds a new cat';
  }

  @Get()
  test(): string {
    return 'This action adds a new cat';
  }
}
