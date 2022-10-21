import { Module } from '@nestjs/common';
import { AdaptersModule } from './adapters/adapters.module';
import { UsecasesModule } from './usecases/usecases.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [AdaptersModule, UsecasesModule, DomainModule],
})
export class AppModule {}
