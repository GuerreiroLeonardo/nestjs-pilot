import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  //   app.connectMicroservice<MicroserviceOptions>({
  //     transport: Transport.KAFKA,
  //     options: {
  //       client: {
  //         brokers: ['kafka:9092'],
  //       },
  //     },
  //   });
  //   await app.startAllMicroservices();
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
