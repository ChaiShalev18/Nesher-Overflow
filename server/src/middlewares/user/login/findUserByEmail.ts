import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { User } from "../../../models/user.model";
import { sendError } from "../../../utils/response";

export const findUserByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return sendError(res, StatusCodes.UNAUTHORIZED, "Invalid credentials");

  res.locals.user = user;
  next();
};
