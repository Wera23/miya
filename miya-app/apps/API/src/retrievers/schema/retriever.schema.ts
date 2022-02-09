import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
// import { Transform } from 'class-transformer';
import { Document, SchemaTypes, Types } from 'mongoose';
import { User } from 'src/users/schema/user.schema';

export type RetrieverDokument = Retriever & Document;

// {_id: false}
@Schema()
export class Retriever extends Document {
  // @Transform(({ value }) => value.toString())
  // _id: string;
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;
  @Prop()
  id: number;
  @Prop()
  name: string;
  @Prop()
  age: string;
  @Prop()
  city?: string;
  @Prop()
  voivodeship: string;
  @Prop()
  gender: string;
  @Prop()
  owner?: string;
  @Prop()
  description?: string;
  @Prop()
  lat: number;
  @Prop()
  long: number;
  @Prop()
  instagram: string;
  @Prop()
  facebook: string;
  @Prop()
  image: string;
  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  user: User;

  // @Prop({ type: SchemaTypes.ObjectId, ref: 'User', required: true })
  // retrieverItem!: Types.ObjectId;
}

export const RetrieverSchema = SchemaFactory.createForClass(Retriever);
