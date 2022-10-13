import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { KafkaController } from './kafka/kafka.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, KafkaController],
  providers: [AppService],
})
export class AppModule {}
