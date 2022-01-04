import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUser {
  userId?: number;
  @IsNotEmpty()
  @IsEmail()
  username: string;
  dateOfBirth?: string;
  @IsNotEmpty()
  @IsString()
  userPassword: string;
  userDescription?: string;
}
