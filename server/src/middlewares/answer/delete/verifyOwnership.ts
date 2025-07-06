import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { sendError } from "../../../utils/response";

export const verifyAnswerOwnership = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = res.locals.user;
  const answer = res.locals.answer;

  if (!answer.author.equals(user.id))
    return sendError(res, StatusCodes.FORBIDDEN, "You do not own this answer");

  next();
};
