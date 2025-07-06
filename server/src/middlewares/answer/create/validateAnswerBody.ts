import { z } from "zod";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { sendError } from "../../../utils/response";

const schema = z.object({
  content: z.string().min(5),
});

export const validateAnswerBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = schema.safeParse(req.body);
  if (!result.success)
    return sendError(res, StatusCodes.BAD_REQUEST, "Invalid answer body");

  req.body = result.data;
  next();
};
