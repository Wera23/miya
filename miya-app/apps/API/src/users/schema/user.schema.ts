import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsOptional } from 'class-validator';
import { Document, ObjectId } from 'mongoose';
// import { Transform, Type } from 'class-transformer';
// import { Retriever, RetrieverSchema } from 'src/retrievers/schema/retriever.schema';
// import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";

export type UserDokument = User & Document;

@Schema()
export class User {
  // @Transform(({ value }) => value.toString())
  // _id: ObjectId;
  // @PrimaryGeneratedColumn()
  @Prop()
  @IsOptional()
  userId?: number;
  @Prop({ unique: true })
  username: string;
  @Prop()
  @IsOptional()
  dateOfBirth?: string;
  @Prop()
  userPassword: string;
  @Prop()
  @IsOptional()
  userDescription?: string;
  @Prop()
  @IsOptional()
  userAddress?: string;
  @Prop()
  @IsOptional()
  userImage: string;
  // @Prop({type: RetrieverSchema})
  // @Type(()=> Retriever)
  // retriever: Retriever

  // @OneToMany(() => Retriever, retriever => retriever.user, {cascade: true});
  // retriever: Retriever;
}

export const UserSchema = SchemaFactory.createForClass(User);
