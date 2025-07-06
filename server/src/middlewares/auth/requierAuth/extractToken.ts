import { Request, Response, NextFunction } from "express";

import { StatusCodes } from "http-status-codes";
import { sendError } from "../../../utils/response";

export const extractToken = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    return sendError(res, StatusCodes.UNAUTHORIZED, "Missing token");
  }

  res.locals.token = header.split(" ")[1];
  next();
};
