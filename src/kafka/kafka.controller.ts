import { Controller, Get } from '@nestjs/common';

@Controller('kafka')
export class KafkaController {
  @Get()
  async publishToTopic(): Promise<any> {
    return [];
  }
}
