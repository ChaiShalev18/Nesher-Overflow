import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { User } from "../../../models/user.model";
import { sendSuccess } from "../../../utils/response";
import { invalidateToken } from "../../../utils/token";


export const logoutHandler = async (req: Request, res: Response) => {
  const user = res.locals.user;

  if (user.currentTokenId) {
    await invalidateToken(user.currentTokenId);
    await User.findByIdAndUpdate(user.id, { currentTokenId: null });
  }

  return sendSuccess(res, "Logged out successfully", StatusCodes.OK);
};
