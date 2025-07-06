import mongoose, { Schema, Document, Types } from "mongoose";

export interface IAnswer extends Document {
  content: string;
  question: Types.ObjectId;
  author: Types.ObjectId;
  votes: {
    upvotedBy: Types.ObjectId[];
    downvotedBy: Types.ObjectId[];
  };
  createdAt: Date;
  updatedAt: Date;
}

const answerSchema = new Schema<IAnswer>(
  {
    content: { type: String, required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    votes: {
      upvotedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
      downvotedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    },
  },
  { timestamps: true }
);

export const Answer = mongoose.model<IAnswer>("Answer", answerSchema);
