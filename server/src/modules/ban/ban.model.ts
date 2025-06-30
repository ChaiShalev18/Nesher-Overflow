import { Schema, model, Types } from "mongoose";

export interface Ban {
  user: Types.ObjectId;
  reason: string;
  bannedUntil?: Date;
  createdAt: Date;
}

const banSchema = new Schema<Ban>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    reason: { type: String, required: true },
    bannedUntil: { type: Date, default: null },
    createdAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

export const BanModel = model<Ban>("Ban", banSchema);