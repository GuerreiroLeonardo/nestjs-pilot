import { Body, Controller, Param, Post } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMessage } from '@nestjs/microservices/external/kafka.interface';
import { Payment, PaymentStatus } from 'src/domain/entities/payment/Payment';
import { Either, left, right } from 'src/shared/either';
import { ChangePaymentStatus } from 'src/usecases/ChangePaymentStatus/ChangePaymentStatus';
import { CreatePayment } from 'src/usecases/CreatePayment/CreatePayment';
import { ProcessPaymentResponse } from 'src/usecases/types/ProcessPaymentResponse';

@Controller('payments')
export class PaymentsController {
  constructor(
    private createPayment: CreatePayment,
    private changePaymentStatus: ChangePaymentStatus,
  ) {}
  @MessagePattern('pagamentos')
  processPayment(@Payload() message: KafkaMessage): void {
    console.log(`TESSSSSSTEEEEEEEEEE ${JSON.stringify(message)}`);
    // const payment = new Payment(message.value as any);
    // console.log(message.value);
    // await this.createPayment.creatPayment(payment);
  }

  //   @Post()
  //   async create(@Body() creatPayment: CreatPaymentDTO) {}

  @Post()
  async create(@Body() paymentDTO: Payment): Promise<Either<string, Payment>> {
    const payment: ProcessPaymentResponse =
      await this.createPayment.creatPayment(paymentDTO);
    if (payment.isLeft()) {
      return left(payment.value.message);
    }
    return right(payment.value);
  }

  @Post('approve/:id')
  async get(@Param('id') id: string): Promise<string> {
    const payment: Payment = await this.changePaymentStatus.changeStatus(
      id,
      PaymentStatus.Confirmed,
    );
    return `Pagamento ${payment.id} aprovado com sucesso!`;
  }

  //   @Get()
  //   test(): string {
  //     return 'This action adds a new cat';
  //   }
}
