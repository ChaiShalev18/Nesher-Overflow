import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { sendError } from "../../../utils/response";

export const verifyOwnership = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const question = res.locals.question;
  const user = res.locals.user;

  if (!question.author.equals(user.id))
    return sendError(res, StatusCodes.FORBIDDEN, "You do not own this question");

  next();
};
