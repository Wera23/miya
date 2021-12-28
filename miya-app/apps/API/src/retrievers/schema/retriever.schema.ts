import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RetrieverDokument = Retriever & Document;

@Schema()
export class Retriever {
  @Prop()
  name: string;
  @Prop()
  city?: string;
  @Prop()
  age: string;
  @Prop()
  voivodeship: string;
  @Prop()
  lat: number;
  @Prop()
  long: number;
  @Prop()
  id: number;
  @Prop()
  owner?: string;
  @Prop()
  description?: string;
}

export const RetrieverSchema = SchemaFactory.createForClass(Retriever);
