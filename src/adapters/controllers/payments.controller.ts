import { Body, Controller, Post } from '@nestjs/common';
import { Payment } from 'src/domain/entities/payment/Payment';
import { ProcessPayment } from 'src/usecases/process-payment/CreatePayment';
// import { MessagePattern, Payload } from '@nestjs/microservices';
// import { KafkaMessage } from 'kafkajs';
// import { Payment } from 'src/domain/entities/payment/Payment';
// import { InvalidPaymentError } from 'src/domain/entities/payment/errors/InvalidPayment';
// import { Either } from 'src/shared/either';
// import { IPaymentRepository } from 'src/usecases/interfaces/IPaymentRepository';
import { ProcessPaymentResponse } from 'src/usecases/types/ProcessPaymentResponse';
// import { PaymentRepository } from '../repositories/mongodb/PaymentRepository';

@Controller('payments')
export class PaymentsController {
  constructor(private processPayment: ProcessPayment) {}
  //   @MessagePattern('pagamentos')
  //   processPayment(
  //     @Payload() message: KafkaMessage,
  //   ): Either<InvalidPaymentError, boolean> {
  //     const payment: paymentDTO = ProcessPayment.creatPayment(message);
  //     return true;
  //   }

  //   @Post()
  //   async create(@Body() creatPayment: CreatPaymentDTO) {}

  @Post()
  async create(@Body() paymentDTO: Payment): Promise<string> {
    const payment: ProcessPaymentResponse =
      await this.processPayment.creatPayment(paymentDTO);
    console.log(payment);
    return 'This action adds a new cat';
  }

  //   @Get('approve/:id')
  //   async get(@Param('id') id: string): Promise<string> {
  //     const payment: void = await this.processPayment.changPaymentStatus(
  //       id,
  //       PaymentStatus.Confirmed,
  //     );
  //     console.log(payment);
  //     return 'This action adds a new cat';
  //   }

  //   @Get()
  //   test(): string {
  //     return 'This action adds a new cat';
  //   }
}
