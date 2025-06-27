import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { env } from "../config/env";
import { Role } from "../types/roles";
import { sendError } from "../utils/response";
import { User } from "../modules/user/user.model";

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return sendError(res, StatusCodes.UNAUTHORIZED, "Missing token");
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, env.jwtSecret) as {
      id: string;
      role: Role;
      tokenId: string;
    };

    const user = await User.findById(decoded.id);
    if (!user || user.currentTokenId !== decoded.tokenId) {
      return sendError(res, StatusCodes.UNAUTHORIZED, "Invalid session");
    }

    res.locals.user = { id: decoded.id, role: decoded.role };
    next();
  } catch {
    return sendError(res, StatusCodes.UNAUTHORIZED, "Invalid token");
  }
};


export const authorize = (...roles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;

    if (!user || !roles.includes(user.role)) {
      return sendError(res, StatusCodes.FORBIDDEN, "Forbidden");
    }

    next();
  };
};
