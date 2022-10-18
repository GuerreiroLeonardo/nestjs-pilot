import { AdaptersModule } from 'src/adapters/adapters.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [AdaptersModule],
  providers: [],
})
export class UsecasesModule {}
