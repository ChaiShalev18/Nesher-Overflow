import { z } from "zod";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { sendError } from "../../../utils/response";

const schema = z.object({
  title: z.string().min(5).max(100),
  content: z.string().min(10),
  tags: z.array(z.string()).optional(),
});

export const validateQuestionData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = schema.safeParse(req.body);
  if (!result.success)
    return sendError(res, StatusCodes.BAD_REQUEST, "Invalid question data");

  req.body = result.data;
  next();
};
