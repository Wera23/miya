import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(
    username: string,
    dateOfBirth: string,
    userPassword: string,
    userDescription: string,
  ): Promise<any> {
    return await this.usersService.createUser(
      username,
      dateOfBirth,
      userPassword,
      userDescription,
    );
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.getUserByName(username);
    if (user && bcrypt.compare(pass, user.userPassword)) {
      const { userPassword, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: any): Promise<any> {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
