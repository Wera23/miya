import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

import { User } from './schema/user.schema';
import { UsersRepository } from './users.repository';
import { UpdateUser } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserByName(username: string): Promise<User> {
    return this.usersRepository.findOneUser({ username });
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.findUsers({});
  }

  async createUser(
    username: string,
    dateOfBirth: string,
    userPassword: string,
    userGreet: boolean,
    isActive: boolean,
    userDescription?: string,
    userVoivodeship?: string,
    userCity?: string,
    userImage?: string,
    userGender?: string,
  ): Promise<User> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userPassword, salt);
    return this.usersRepository.createUser({
      userId: Date.now(),
      username,
      dateOfBirth,
      userPassword: hashedPassword,
      userGreet,
      isActive,
      userDescription,
      userVoivodeship,
      userCity,
      userImage,
      userGender,
    });
  }

  async updateUser(id: number, userUpdates: UpdateUser): Promise<User> {
    return this.usersRepository.findOneUserAndUpdate({ id }, userUpdates);
  }
}
