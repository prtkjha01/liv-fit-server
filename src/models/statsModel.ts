import mongoose from "mongoose";

var Schema = mongoose.Schema;

const StatsSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    blood_group: {
      type: String,
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

const StatsModel = mongoose.model("Stats", StatsSchema);
export default StatsModel;
