import mongoose from "mongoose";

var Schema = mongoose.Schema;

const SleepSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    start_time: {
      type: Date,
      required: true,
    },
    end_time: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
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
SleepSchema.pre("save", function (next) {
  // Ensure start_time and end_time are defined
  if (this.start_time && this.end_time) {
    // Calculate the duration in milliseconds
    const durationInMillis =
      this.end_time.getTime() - this.start_time.getTime();

    // Convert duration to hours (or any other desired unit)
    this.duration = durationInMillis / (1000 * 60 * 60);
  }

  // Continue with the save operation
  next();
});
const SleepModel = mongoose.model("Sleep", SleepSchema);
export default SleepModel;
