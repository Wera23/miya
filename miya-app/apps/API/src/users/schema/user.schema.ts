import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsOptional } from 'class-validator';
import { Document } from 'mongoose';

export type UserDokument = User & Document;

@Schema()
export class User {
  @Prop()
  @IsOptional()
  userId?: number;
  @Prop()
  username: string;
  @Prop()
  @IsOptional()
  dateOfBirth?: string;
  @Prop()
  userPassword: string;
  @IsOptional()
  @Prop()
  userDescription?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
