import mongoose, { Schema, Document } from "mongoose";

import { UserRole } from "../types/user.types.ts";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: UserRole;
  isBanned: boolean;
  bannedUntil: Date | null;
  favorites: mongoose.Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["guest", "user", "admin"],
      default: "user",
    },
    isBanned: { type: Boolean, default: false },
    bannedUntil: { type: Date, default: null },
    favorites: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<IUser>("User", userSchema);
