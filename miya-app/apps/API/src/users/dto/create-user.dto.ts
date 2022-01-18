import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { Retriever } from 'src/retrievers/schema/retriever.schema';

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
  userAddress?: string;
  retriever: Retriever
}
