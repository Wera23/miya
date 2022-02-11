import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUser {
  userId?: number;
  @IsNotEmpty()
  @IsEmail()
  username: string;
  dateOfBirth?: string;
  @IsNotEmpty()
  userPassword: string;
  userGreet: boolean;
  isActive: boolean;
  userDescription?: string;
  userVoivodeship?: string;
  userCity?: string;
  userImage?: string;
  userGender?: string;
}
