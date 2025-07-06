import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { User } from "../../../models/user.model";
import { sendSuccess } from "../../../utils/response";

export const deleteAccount = async (req: Request, res: Response) => {
  await User.findByIdAndDelete(res.locals.user._id);
  
  return sendSuccess(res, "Account deleted", StatusCodes.OK);
};
