import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Retriever } from 'src/retrievers/schema/retriever.schema';
import { User, UserDokument } from 'src/users/schema/user.schema';
import { CreateUser } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDokument>,
  ) {}

  async findOneUser(usersFilterQuery: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(usersFilterQuery);
  }

  async findUsers(usersFilterQuery: FilterQuery<User>): Promise<User[]> {
    return this.userModel
      .find(usersFilterQuery)
      .populate('retrievers', null, Retriever.name)
      .exec();
  }

  async createUser(user: CreateUser): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findOneUserAndUpdate(
    userFilterQuery: FilterQuery<User>,
    retriever: Partial<User>,
  ): Promise<User> {
    return this.userModel.findOneAndUpdate(userFilterQuery, retriever, {
      new: true,
    });
  }
}
