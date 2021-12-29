import * as mongoose from 'mongoose';

export const RetrieverSchema = new mongoose.Schema({
  id: { type: Number, required: false },
  name: { type: String, required: true },
  age: { type: String, required: false },
  city: { type: String, required: true },
  voivodeship: { type: String, required: true },
  gender: { type: String, required: true },
  owner: { type: String, required: false },
  description: { type: String, required: false },
  lat: { type: Number, required: true },
  long: { type: Number, required: true },
  instagram: { type: String, required: false },
  facebook: { type: String, required: false },
});
