import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   ManyToOne,
//   JoinColumn,
// } from 'typeorm';

export type RetrieverDokument = Retriever & Document;

@Schema()
// @Entity()
export class Retriever {
  // @PrimaryGeneratedColumn()
  @Prop()
  id: number;
  // @Column()
  @Prop()
  name: string;
  // @Column()
  @Prop()
  age: string;
  // @Column()
  @Prop()
  city?: string;
  // @Column()
  @Prop()
  voivodeship: string;
  // @Column()
  @Prop()
  gender: string;
  // @Column()
  @Prop()
  owner?: string;
  @Prop()
  description?: string;
  // @Column()
  @Prop()
  instagram: string;
  // @Column()
  @Prop()
  facebook: string;
  @Prop()
  image: string;

  // @ManyToOne(() => User, (user) => user.retriever)
  // @JoinColumn({ name: 'retriever_id' })
  // user: User;
}

export const RetrieverSchema = SchemaFactory.createForClass(Retriever);
