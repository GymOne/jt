import * as mongoose from 'mongoose';
import { Logger } from '@nestjs/common';

const Schema = mongoose.Schema;

export const ExerciseSchema = new Schema({
  name: { type: String, required: true },
});

ExerciseSchema.index(
  {
    name: 1,
  },
  {
    unique: true,
  },
);

ExerciseSchema.pre('deleteOne', async function (next) {
  const id = this.getQuery()['_id'];
  await mongoose
    .model('Exercise')
    .updateMany({ exercise: id }, { $pull: { exercise: id } })
    .exec();
  next();
});
