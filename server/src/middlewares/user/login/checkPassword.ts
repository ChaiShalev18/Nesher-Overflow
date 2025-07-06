import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { comparePasswords } from "../../../utils/password";
import { sendError } from "../../../utils/response";

export const checkPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const match = await comparePasswords(req.body.password, res.locals.user.password);
  if (!match)
    return sendError(res, StatusCodes.UNAUTHORIZED, "Invalid credentials");

  next();
};
