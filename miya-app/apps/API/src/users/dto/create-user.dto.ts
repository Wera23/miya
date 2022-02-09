import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUser {
  userId?: number;
  @IsNotEmpty()
  username: string;
  dateOfBirth?: string;
  @IsNotEmpty()
  @IsString()
  userPassword: string;
  userDescription?: string;
  userVoivodeship?: string;
  userCity?: string;
  userImage?: string;
  userGender?: string;
}
