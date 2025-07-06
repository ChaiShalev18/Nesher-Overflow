import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { sendError } from "../../../utils/response";
import { Answer } from "../../../models/answer.model";

export const loadAnswer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const answer = await Answer.findById(req.params.answerId);
  if (!answer)
    return sendError(res, StatusCodes.NOT_FOUND, "Answer not found");

  res.locals.answer = answer;
  next();
};
