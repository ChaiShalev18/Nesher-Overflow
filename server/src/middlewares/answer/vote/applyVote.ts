import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { sendSuccess } from "../../../utils/response";

export const applyVote = async (req: Request, res: Response) => {
  const userId = res.locals.user.id;
  const answer = res.locals.answer;
  const voteType: "upvote" | "downvote" = req.body.type;

  const alreadyUp = answer.votes.upvotedBy.includes(userId);
  const alreadyDown = answer.votes.downvotedBy.includes(userId);

  if ((voteType === "upvote" && alreadyUp) || (voteType === "downvote" && alreadyDown)) {
    return sendSuccess(res, "Vote already recorded", StatusCodes.OK);
  }

  answer.votes.upvotedBy = answer.votes.upvotedBy.filter((id) => !id.equals(userId));
  answer.votes.downvotedBy = answer.votes.downvotedBy.filter((id) => !id.equals(userId));

  if (voteType === "upvote") answer.votes.upvotedBy.push(userId);
  else answer.votes.downvotedBy.push(userId);

  await answer.save();

  return sendSuccess(res, {
    votes: {
      up: answer.votes.upvotedBy.length,
      down: answer.votes.downvotedBy.length,
    },
  }, StatusCodes.OK);
};
