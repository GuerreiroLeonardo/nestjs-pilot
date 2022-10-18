import { Module } from '@nestjs/common';
import { AdaptersModule } from './adapters/adapters.module';
import { UsecasesModule } from './usecases/usecases.module';

@Module({
  imports: [AdaptersModule, UsecasesModule],
})
export class AppModule {}
