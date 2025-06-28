import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { sendError, sendSuccess } from "../../utils/response";
import { Role } from "../../types/roles";
import {
  createAnswer,
  deleteAnswer,
  getAnswersForQuestion,
} from "./answer.service";
import { voteAnswer } from "../vote/vote.service";
import { VoteType } from "../vote/vote.model";

export const handleCreateAnswer = async (
  req: Request<{}, {}, { content: string }, {}, { user: { id: string } }>,
  res: Response
) => {
  try {
    const { content } = req.body;
    const { questionId } = req.params as any;
    const userId = res.locals.user.id;

    const answer = await createAnswer(content, questionId, userId);
    return sendSuccess(res, StatusCodes.CREATED, answer);
  } catch (err) {
    return sendError(res, StatusCodes.BAD_REQUEST, "Failed to create answer");
  }
};

export const handleDeleteAnswer = async (
  req: Request<{ id: string }, {}, {}, {}, { user: { id: string; role: Role } }>,
  res: Response
) => {
  try {
    const answerId = req.params.id;
    const { id: userId, role } = res.locals.user;

    const deleted = await deleteAnswer(answerId, userId, role === Role.Admin);
    return sendSuccess(res, StatusCodes.OK, deleted);
  } catch (err) {
    return sendError(res, StatusCodes.BAD_REQUEST, err instanceof Error ? err.message : "Delete failed");
  }
};

export const handleVoteAnswer = async (
  req: Request<{ id: string }, {}, { value: VoteType }, {}, { user: { id: string } }>,
  res: Response
) => {
  try {
    const answerId = req.params.id;
    const userId = res.locals.user.id;
    const { value } = req.body;

    const result = await voteAnswer(answerId, userId, value);
    return sendSuccess(res, StatusCodes.OK, result);
  } catch (err) {
    return sendError(res, StatusCodes.BAD_REQUEST, err instanceof Error ? err.message : "Vote failed");
  }
};

export const handleGetAnswersForQuestion = async (
  req: Request<{ questionId: string }>,
  res: Response
) => {
  try {
    const { questionId } = req.params;
    const answers = await getAnswersForQuestion(questionId);
    return sendSuccess(res, StatusCodes.OK, answers);
  } catch (err) {
    return sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, "Fetch answers failed");
  }
};
