import { Module } from '@nestjs/common';
import { RetrieversService } from './retrievers.service';
import { RetrieversController } from './retrievers.controller';

@Module({
  providers: [RetrieversService],
  controllers: [RetrieversController],
})
export class RetrieversModule {}
