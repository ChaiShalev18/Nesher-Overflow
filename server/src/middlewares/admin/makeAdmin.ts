import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { User } from "../../models/user.model";
import { Role } from "../../types/roles";
import { sendError, sendSuccess } from "../../utils/response";

export const makeAdmin = async (req: Request, res: Response) => {
  const userId = req.params.id;

  const updated = await User.findByIdAndUpdate(
    userId,
    { role: Role.Admin },
    { new: true }
  );

  if (!updated)
    return sendError(res, StatusCodes.NOT_FOUND, "User not found");

  return sendSuccess(res, updated, StatusCodes.OK);
};
