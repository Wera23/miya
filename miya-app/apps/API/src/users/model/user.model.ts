import * as mongoose from 'mongoose';

export const RetrieverSchema = new mongoose.Schema({
  userId: { type: Number, required: false },
  username: { type: String, required: true },
  dateOfBirth: { type: String, required: false },
  userPassword: { type: String, required: true },
  userDescription: { type: String, required: false },
});
