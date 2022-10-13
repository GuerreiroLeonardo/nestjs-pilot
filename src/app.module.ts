import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { PaymentsModule } from './payments/payments.module';
import { DomainModule } from './domain/domain.module';
import { PresentationModule } from './presentation/presentation.module';
import { ExternalModule } from './external/external.module';

@Module({
  imports: [PaymentsModule, DomainModule, PresentationModule, ExternalModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
