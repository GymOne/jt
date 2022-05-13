"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.ExerciseSchema = new Schema({
    name: { type: String, required: true },
});
exports.ExerciseSchema.index({
    name: 1,
}, {
    unique: true,
});
exports.ExerciseSchema.pre('deleteOne', async function (next) {
    const id = this.getQuery()['_id'];
    await mongoose
        .model('Exercise')
        .updateMany({ exercise: id }, { $pull: { exercise: id } })
        .exec();
    next();
});
//# sourceMappingURL=exercise.schema.js.map