import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/users/schema/user.schema';
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"

export type RetrieverDokument = Retriever & Document;

@Schema()
@Entity()
export class Retriever {
  @PrimaryGeneratedColumn()
  @Prop()
  id: number;
  @Column()
  @Prop()
  name: string;
  @Column()
  @Prop()
  age: string;
  @Column()
  @Prop()
  city?: string;
  @Column()
  @Prop()
  voivodeship: string;
  @Column()
  @Prop()
  gender: string;
  @Column()
  @Prop()
  owner?: string;
  @Prop()
  description?: string;
  @Column()
  @Prop()
  lat: number;
  @Column()
  @Prop()
  long: number;
  @Column()
  @Prop()
  instagram: string;
  @Column()
  @Prop()
  facebook: string;

  @ManyToOne(() => User, user => user.retriever)
  user: User;
}

export const RetrieverSchema = SchemaFactory.createForClass(Retriever);
