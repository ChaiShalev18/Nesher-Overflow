import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { StatusCodes } from "http-status-codes";

import { User } from "../../../models/user.model";
import { sendError, sendSuccess } from "../../../utils/response";


const updateSchema = z.object({
  email: z.string().email().optional(),
});

export const updateProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = updateSchema.safeParse(req.body);
  if (!result.success)
    return sendError(res, StatusCodes.BAD_REQUEST, "Invalid data");

  const updated = await User.findByIdAndUpdate(
    res.locals.user._id,
    result.data,
    { new: true }
  );

  return sendSuccess(res, updated, StatusCodes.OK);
};
