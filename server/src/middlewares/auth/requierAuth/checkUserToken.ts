import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";

import { sendError } from "../../../utils/response";

export const checkUserToken = (req: Request, res: Response, next: NextFunction) => {
  if (res.locals.user.currentTokenId !== res.locals.jwt.tokenId)
    return sendError(res, StatusCodes.UNAUTHORIZED, "Token mismatch");

  next();
};
