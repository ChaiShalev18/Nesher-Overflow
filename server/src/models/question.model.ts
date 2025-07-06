import mongoose, { Schema, Document, Types } from "mongoose";

export interface IQuestion extends Document {
  title: string;
  content: string;
  tags: string[];
  author: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const questionSchema = new Schema<IQuestion>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: String }],
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Question = mongoose.model<IQuestion>("Question", questionSchema);
