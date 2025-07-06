import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { sendError } from "../../../utils/response";
import { Question } from "../../../models/question.model";

export const verifyQuestionExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const question = await Question.findById(req.params.questionId);
  if (!question)
    return sendError(res, StatusCodes.NOT_FOUND, "Question not found");

  res.locals.question = question;
  next();
};
