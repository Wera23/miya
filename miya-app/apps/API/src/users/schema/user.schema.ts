import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDokument = User & Document;

@Schema()
export class User {
  @Prop()
  userId: number;
  @Prop()
  username: string;
  @Prop()
  userPassword: string;
  @Prop()
  dateOfBirth: string;
  @Prop()
  userDescription: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
