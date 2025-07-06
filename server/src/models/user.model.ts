import mongoose, { Schema, Document } from "mongoose";

import { Role } from "../types/roles";

export interface IUser extends Document {
  email: string;
  password: string;
  role: Role;
  currentTokenId?: string;
  bannedUntil?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(Role), default: Role.User },
    currentTokenId: { type: String },
    bannedUntil: { type: Date },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", userSchema);
