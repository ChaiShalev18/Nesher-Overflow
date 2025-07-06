import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { sendError } from "../../utils/response";

export const checkUserNotBanned = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = res.locals.user;
  if (user?.bannedUntil && user.bannedUntil > new Date()) {
    return sendError(res, StatusCodes.FORBIDDEN, "User is banned");
  }

  next();
};
