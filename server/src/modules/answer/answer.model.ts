import mongoose, { Schema } from "mongoose";

const answerSchema = new Schema(
  {
    content: { type: String, required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

export const Answer = mongoose.model("Answer", answerSchema);