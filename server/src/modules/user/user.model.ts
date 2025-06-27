import mongoose, { Schema, Document, Types } from "mongoose";
import { Role } from "../../types/roles";

export interface IUser extends Document {
  email: string;
  password: string;
  role: Role;
  bannedUntil?: Date;
  favoriteQuestions: Types.ObjectId[];
  currentTokenId?: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(Role), default: Role.User },
    bannedUntil: { type: Date },
    favoriteQuestions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
    currentTokenId: { type: String },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", userSchema);
