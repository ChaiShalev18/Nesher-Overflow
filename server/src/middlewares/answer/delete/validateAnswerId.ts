import { Request, Response, NextFunction } from "express";
import { isValidObjectId } from "mongoose";
import { StatusCodes } from "http-status-codes";

import { sendError } from "../../../utils/response";

export const validateAnswerId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!isValidObjectId(req.params.answerId))
    return sendError(res, StatusCodes.BAD_REQUEST, "Invalid answer ID");

  next();
};
