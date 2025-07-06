import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";

import { sendError } from "../../../utils/response";
import { isTokenBlacklisted } from "../../../utils/token";

export const checkBlacklist = async (req: Request, res: Response, next: NextFunction) => {
  const blacklisted = await isTokenBlacklisted(res.locals.jwt.tokenId);
  if (blacklisted)
    return sendError(res, StatusCodes.UNAUTHORIZED, "Token is invalid");

  next();
};
