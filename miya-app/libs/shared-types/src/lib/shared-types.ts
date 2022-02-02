import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class Retriever {
  @IsNumber() @IsOptional() readonly id: number;
  @IsString() readonly name: string;
  @IsString() readonly age: string;
  @IsString() readonly city: string;
  @IsString() readonly voivodeship: string;
  @IsString() readonly gender: string;
  @IsString() readonly owner: string;
  @IsString() readonly description: string;
  @Type(() => Number)
  @IsNumber()
  lat: number;
  @Type(() => Number)
  @IsNumber()
  long: number;
  @IsString() @IsOptional() readonly instagram: string;
  @IsString() @IsOptional() readonly facebook: string;
  @IsString() @IsOptional() readonly image: string;
}
export class EditRetriever {
  @IsString() readonly name: string | undefined;
  @IsString() readonly age: string | undefined;
  @IsString() readonly city: string | undefined;
  @IsString() readonly voivodeship: string | undefined;
  @IsString() readonly description: string | undefined;
  @Type(() => Number)
  @IsNumber()
  lat: number | undefined;
  @Type(() => Number)
  @IsNumber()
  long: number | undefined;
  @IsString() @IsOptional() readonly instagram: string | undefined;
  @IsString() @IsOptional() readonly facebook: string | undefined;
  @IsString() @IsOptional() readonly image: string | undefined;
}

export class User {
  @IsNumber() @IsOptional() readonly userId: number;
  @IsString() readonly username: string;
  @IsString() readonly userPassword: string;
  @IsString() @IsOptional() readonly dateOfBirth: number | Date;
  @IsString() @IsOptional() readonly userDescription: string;
  @IsString() @IsOptional() readonly userAddress: string;
  @IsString() @IsOptional() readonly userImage: string;
}

export class EditUser {
  @IsString() @IsOptional() readonly dateOfBirth: number | Date | undefined;
  @IsString() @IsOptional() readonly userDescription: string | undefined;
  @IsString() @IsOptional() readonly userAddress: string | undefined;
  @IsString() @IsOptional() readonly userImage: string | undefined;
}

export class UserLogin {
  @IsString() readonly username: string;
  @IsString() readonly password: string;
}
