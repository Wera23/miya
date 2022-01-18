import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RetrieversController } from './retrievers.controller';
import { RetriversService } from './retrievers.service';
import { Retriever, RetrieverSchema } from './schema/retriever.schema';
import { RetrieversRepository } from './retrievers.repository';
import { User, UserSchema } from 'src/users/schema/user.schema';
import { UsersService } from 'src/users/users.service';
import { UsersRepository } from 'src/users/users.repository';
import { UsersController } from 'src/users/users.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Retriever.name, schema: RetrieverSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  providers: [
    RetriversService,
    RetrieversRepository,
    UsersService,
    UsersRepository,
  ],
  controllers: [RetrieversController, UsersController],
})
export class RetrieversModule {}
