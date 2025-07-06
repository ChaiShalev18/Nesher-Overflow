import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";

import { User } from "../../../models/user.model";
import { sendError } from "../../../utils/response";

export const loadUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findById(res.locals.jwt.userId);
  if (!user)
    return sendError(res, StatusCodes.UNAUTHORIZED, "User not found");

  res.locals.user = user;
  next();
};
