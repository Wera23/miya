import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateUser } from './dto/create-user.dto';
import { UpdateUser } from './dto/update-user.dto';
import { User } from './schema/user.schema';
// import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  //@InjectRepository(RetrieversRepository) private retrieverRepository: RetrieversRepository

  @UseGuards(JwtAuthGuard)
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
      user.userVoivodeship,
      user.userCity,
      user.userImage,
      user.userGender,

    );
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() user: UpdateUser,
  ): Promise<User> {
    return this.usersService.updateUser(id, user);
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
