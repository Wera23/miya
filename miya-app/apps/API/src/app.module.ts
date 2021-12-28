import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RetrieversModule } from './retrievers/retrievers.module';

import config from './config/keys';
@Module({
  imports: [RetrieversModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [],
  providers: [],
})
export class AppModule {}
