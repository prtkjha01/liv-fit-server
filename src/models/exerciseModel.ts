import mongoose, { Document } from "mongoose";

var Schema = mongoose.Schema;
const muscles = [
  "CHEST",
  "SHOULDER",
  "TRICEPS",
  "BACK",
  "BICEPS",
  "LEGS",
  "ABS",
];
const ExerciseSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    targeted_muscles: {
      type: [
        {
          type: String,
          enum: muscles,
        },
      ],
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
interface Exercise extends Document {
  name: string;
  targeted_muscles: Array<string>;
  is_deleted: boolean;
  created_at: Date;
  updated_at: Date;
}
const ExerciseModel = mongoose.model<Exercise>("Exercises", ExerciseSchema);
export default ExerciseModel;
