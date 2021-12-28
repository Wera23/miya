import * as mongoose from 'mongoose';

export const RetrieverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: false },
  city: { type: String, required: true },
  description: { type: String, required: false },
  gender: { type: String, required: true },
  id: { type: Number, required: false },
  lat: { type: Number, required: true },
  long: { type: Number, required: true },
  voivodeship: { type: String, required: true },
  owner: { type: String, required: false },
});

// export interface RetrieverTypes {
//   name: string;
//   age?: string;
//   city: string;
//   description?: string;
//   gender: string;
//   id: number;
//   lat: number;
//   long: number;
//   voivodeship: string;
//   owner?: string;
// }

// export class Retriever {
//   @IsString() readonly name: string;
//   @IsString() @IsOptional() readonly age: string;
//   @IsString() readonly city: string;
//   @IsString() @IsOptional() readonly description: string;
//   @IsString() readonly gender: string;
//   @IsNumber() @IsOptional() readonly id: number;
//   @Type(() => Number)
//   @IsNumber()
//   lat: number;
//   @Type(() => Number)
//   @IsNumber()
//   long: number;
//   @IsString() readonly voivodeship: string;
//   @IsString() @IsOptional() readonly owner: string;
// }
