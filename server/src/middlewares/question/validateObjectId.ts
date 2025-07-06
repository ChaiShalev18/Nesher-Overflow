import { Request, Response, NextFunction } from "express";
import { isValidObjectId } from "mongoose";
import { StatusCodes } from "http-status-codes";

import { sendError } from "../../utils/response";

export const validateObjectId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!isValidObjectId(req.params.id))
    return sendError(res, StatusCodes.BAD_REQUEST, "Invalid question ID");

  next();
};
