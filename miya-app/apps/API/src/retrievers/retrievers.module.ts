import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RetrieversService } from './retrievers.service';
import { RetrieversController } from './retrievers.controller';
import { RetrieverSchema } from './retriever.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Retreiver', schema: RetrieverSchema }]),
  ],
  providers: [RetrieversService],
  controllers: [RetrieversController],
})
export class RetrieversModule {}
