import { Request, Response, NextFunction } from "express";

import { StatusCodes } from "http-status-codes";
import { User } from "../../../models/user.model";
import { sendError } from "../../../utils/response";

export const checkEmailNotTaken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const exists = await User.findOne({ email: req.body.email });
  if (exists)
    return sendError(res, StatusCodes.BAD_REQUEST, "Email already registered");

  next();
};
