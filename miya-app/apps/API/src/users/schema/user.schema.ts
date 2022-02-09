import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
// import { IsOptional } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { Document, ObjectId, SchemaTypes, Types } from 'mongoose';
import {
  Retriever,
  RetrieverSchema,
} from 'src/retrievers/schema/retriever.schema';

export type UserDokument = User & Document;

@Schema({ _id: false })
export class User extends Document {
  // @Transform(({ value }) => value.toString())
  // _id: ObjectId;
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;
  @Prop()
  userId?: number;
  @Prop({ unique: true })
  username: string;
  @Prop()
  dateOfBirth?: string;
  @Prop()
  userPassword: string;
  @Prop()
  userDescription?: string;
  @Prop()
  userVoivodeship: string;
  @Prop()
  userCity: string;
  @Prop()
  userImage: string;
  @Prop()
  userGender: string;
  @Prop({ type: RetrieverSchema, ref: Retriever.name })
  @Type(() => Retriever)
  retriever: Retriever[];
  // @Prop({ type: SchemaTypes.ObjectId, ref: 'Retriever' })
  // retrievers: Retriever;
}

export const UserSchema = SchemaFactory.createForClass(User);

// UserSchema.virtual('retrievers', {
//   ref: 'Retriever',
//   localField: '_id',
//   foreignField: 'userItem',
// });
