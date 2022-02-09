import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RetrieversController } from './retrievers.controller';
import { RetriversService } from './retrievers.service';
import { Retriever, RetrieverSchema } from './schema/retriever.schema';
import { RetrieversRepository } from './retrievers.repository';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Retriever.name, schema: RetrieverSchema }],
      'retrievers',
    ),
  ],
  providers: [RetriversService, RetrieversRepository],
  controllers: [RetrieversController],
  exports: [RetriversService],
})
export class RetrieversModule {}
