import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UploadPhotoDokument = UploadPhoto & Document;

@Schema()
export class UploadPhoto {
  @Prop()
  id: number;
  @Prop()
  name: string;
}

export const UploadPhotoSchema = SchemaFactory.createForClass(UploadPhoto);
