import { Module } from '@nestjs/common';
import { RetrieversModule } from './retrievers/retrievers.module';

@Module({
  imports: [RetrieversModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
