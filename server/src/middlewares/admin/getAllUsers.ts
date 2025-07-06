import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { User } from "../../models/user.model";
import { sendSuccess } from "../../utils/response";

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await User.find();
  
  return sendSuccess(res, users, StatusCodes.OK);
};
