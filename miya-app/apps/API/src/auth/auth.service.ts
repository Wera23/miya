import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/schema/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(
    username: string,
    dateOfBirth: string,
    userPassword: string,
    userDescription: string,
  ): Promise<any> {
    return await this.usersService
      .createUser(username, dateOfBirth, userPassword, userDescription)
      .then(() => {
        return this.jwtService.sign(User);
      });
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.getUserByName(username);
    if (user && (await bcrypt.compare(pass, user.userPassword))) {
      const { userPassword, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: any): Promise<any> {
    const payload = {
      username: user._doc.username,
      sup: user._doc.userId,
      dateOfBirth: user._doc.dateOfBirth,
      userDescription: user._doc.userDescription,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
