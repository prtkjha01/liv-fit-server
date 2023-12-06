import mongoose from "mongoose";

var Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    name: { type: String, required: true },
    sets: { type: Number, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
  },
  { _id: false }
);

const WorkoutSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    exercises: {
      type: [exerciseSchema],
      required: true,
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);
const WorkoutModel = mongoose.model("Workout", WorkoutSchema);
export default WorkoutModel;
