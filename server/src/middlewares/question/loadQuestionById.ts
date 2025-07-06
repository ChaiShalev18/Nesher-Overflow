import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { Question } from "../../models/question.model";
import { sendError } from "../../utils/response";

export const loadQuestionById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const question = await Question.findById(req.params.id).populate("author", "email role");

  if (!question)
    return sendError(res, StatusCodes.NOT_FOUND, "Question not found");

  res.locals.question = question;
  next();
};
