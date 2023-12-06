import mongoose from "mongoose";

var Schema = mongoose.Schema;

const WaterSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    count: {
      type: Number,
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

const StatsModel = mongoose.model("Water", WaterSchema);
export default StatsModel;
