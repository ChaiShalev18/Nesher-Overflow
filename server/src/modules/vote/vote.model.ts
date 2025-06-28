import mongoose, { Schema, Types } from "mongoose";

export enum VoteType {
	Upvote = "upvote",
	Downvote = "downvote",
}

export interface Vote {
	_id: Types.ObjectId;
	userId: Types.ObjectId;
	answerId: Types.ObjectId;
	type: VoteType;
	createdAt: Date;
}

const voteSchema = new Schema<Vote>(
	{
		userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
		answerId: { type: Schema.Types.ObjectId, ref: "Answer", required: true },
		type: { type: String, enum: Object.values(VoteType), required: true },
	},
	{ timestamps: { createdAt: true, updatedAt: false } }
);

voteSchema.index({ userId: 1, answerId: 1 }, { unique: true });

export const Vote = mongoose.model<Vote>("Vote", voteSchema);
