import { Types } from "mongoose";

import { Vote } from "../vote/vote.model";
import { Answer } from "./answer.model";

export const createAnswer = async (content: string, questionId: string, authorId: string) => {
  const answer = await Answer.create({
    content,
    question: questionId,
    author: authorId,
  });

  return answer;
};

export const deleteAnswer = async (answerId: string, userId: string, isAdmin: boolean) => {
  const answer = await Answer.findById(answerId);

  if (!answer) throw new Error("Answer not found");

  if (!isAdmin && answer.author.toString() !== userId) {
    throw new Error("Not authorized to delete this answer");
  }

  await Vote.deleteMany({ answer: answer._id });
  await answer.deleteOne();

  return answer;
};

export const getAnswersForQuestion = async (questionId: string) => {
  const answers = await Answer.aggregate([
    { $match: { question: new Types.ObjectId(questionId) } },
    {
      $lookup: {
        from: "votes",
        localField: "_id",
        foreignField: "answer",
        as: "votes",
      },
    },
    {
      $addFields: {
        score: {
          $sum: "$votes.value",
        },
      },
    },
    {
      $project: {
        content: 1,
        author: 1,
        createdAt: 1,
        score: 1,
      },
    },
    { $sort: { score: -1, createdAt: -1 } },
  ]);

  return answers;
};
