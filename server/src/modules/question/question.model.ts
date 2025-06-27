import { Schema, model, Types, Document } from "mongoose";

export interface Question extends Document {
  title: string;
  content: string;
  author: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const questionSchema = new Schema<Question>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<Question>("Question", questionSchema);
