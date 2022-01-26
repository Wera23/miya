import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateUser } from './dto/create-user.dto';
import { User } from './schema/user.schema';
// import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  //@InjectRepository(RetrieversRepository) private retrieverRepository: RetrieversRepository

  @Get()
  async findAllUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post()
  createUser(@Body() user: CreateUser) {
    return this.usersService.createUser(
      user.username,
      user.dateOfBirth,
      user.userPassword,
      user.userDescription,
      user.userAddress,
      user.userImage,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('current')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get(':username')
  async findUser(@Param('username') username: string): Promise<User> {
    return this.usersService.getUserByName(username);
  }
}
