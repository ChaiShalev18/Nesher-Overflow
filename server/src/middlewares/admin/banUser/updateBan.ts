import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { User } from "../../../models/user.model";
import { sendError, sendSuccess } from "../../../utils/response";

export const updateBan = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const until = res.locals.untilDate;

  const updated = await User.findByIdAndUpdate(
    userId,
    { bannedUntil: until },
    { new: true }
  );

  if (!updated)
    return sendError(res, StatusCodes.NOT_FOUND, "User not found");

  return sendSuccess(res, updated, StatusCodes.OK);
};
