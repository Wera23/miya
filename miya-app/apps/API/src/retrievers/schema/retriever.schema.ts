import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RetrieverDokument = Retriever & Document;

@Schema()
export class Retriever {
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
}

export const RetrieverSchema = SchemaFactory.createForClass(Retriever);
