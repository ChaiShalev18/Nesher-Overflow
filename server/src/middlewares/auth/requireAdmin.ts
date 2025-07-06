import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { Role } from "../../types/roles";
import { sendError } from "../../utils/response";

export const requireAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = res.locals.user;
  if (!user || user.role !== Role.Admin) {
    return sendError(res, StatusCodes.FORBIDDEN, "Admin access required");
  }

  next();
};
