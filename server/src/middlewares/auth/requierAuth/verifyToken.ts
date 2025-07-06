import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { StatusCodes } from "http-status-codes";
import { sendError } from "../../../utils/response";
import { env } from "../../../config/env";


export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = jwt.verify(res.locals.token, env.jwtSecret) as {
      userId: string;
      tokenId: string;
    };
    res.locals.jwt = payload;
    next();
  } catch {
    return sendError(res, StatusCodes.UNAUTHORIZED, "Token verification failed");
  }
};
