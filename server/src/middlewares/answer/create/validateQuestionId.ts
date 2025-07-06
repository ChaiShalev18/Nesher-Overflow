import { Request, Response, NextFunction } from "express";
import { isValidObjectId } from "mongoose";
import { StatusCodes } from "http-status-codes";

import { sendError } from "../../../utils/response";

export const validateQuestionId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!isValidObjectId(req.params.questionId))
    return sendError(res, StatusCodes.BAD_REQUEST, "Invalid question ID");

  next();
};
