import { Injectable } from '@nestjs/common';
import { User } from './schema/user.schema';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserByName(username: string): Promise<User> {
    // return this.usersRepository.find((user) => user.username === username)
    return this.usersRepository.findOneUSer({ username });
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.findUsers({});
  }

  async createUser(
    username: string,
    dateOfBirth: string,
    userPassword: string,
    userDescription?: string,
  ): Promise<User> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userPassword, salt);
    return this.usersRepository.createUser({
      userId: Date.now(),
      username,
      dateOfBirth,
      userPassword: hashedPassword,
      userDescription,
    });
  }
}
