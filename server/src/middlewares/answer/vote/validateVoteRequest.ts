import { z } from "zod";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { sendError } from "../../../utils/response";

const schema = z.object({
  type: z.enum(["upvote", "downvote"]),
});

export const validateVoteRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = schema.safeParse(req.body);
  if (!result.success)
    return sendError(res, StatusCodes.BAD_REQUEST, "Invalid vote type");

  req.body = result.data;
  next();
};
