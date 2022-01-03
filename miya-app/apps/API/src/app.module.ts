import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RetrieversModule } from './retrievers/retrievers.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

import config from './config/keys';
import { AppController } from './app.controller';
@Module({
  imports: [
    RetrieversModule,
    MongooseModule.forRoot(config.mongoURI),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
