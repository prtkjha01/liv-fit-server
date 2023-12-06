import mongoose from "mongoose";

var Schema = mongoose.Schema;

const TutorialSchema = new Schema(
  {
    exercise: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    reference_video: {
      type: String,
      required: true,
    },
    description: {
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

const TutorialModel = mongoose.model("Tutorials", TutorialSchema);
export default TutorialModel;
