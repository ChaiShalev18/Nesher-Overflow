import { Answer } from "../answer/answer.model";
import { Vote, VoteType } from "./vote.model";

export const voteAnswer = async (answerId: string, userId: string, type: VoteType) => {
  const answer = await Answer.findById(answerId).select("author");

  if (!answer) {
    throw new Error("Answer not found");
  }

  if (answer.author.toString() === userId) {
    throw new Error("You cannot vote on your own answer");
  }

  const existing = await Vote.findOne({ answer: answerId, user: userId }) as InstanceType<typeof Vote> | null;

  if (existing) {
    if (existing.type === type) {
      throw new Error("You have already voted this way");
    }

    existing.type === type;
    await existing.save();
    return { updated: true };
  }

  await Vote.create({ answer: answerId, user: userId, type });
  return { created: true };
};
