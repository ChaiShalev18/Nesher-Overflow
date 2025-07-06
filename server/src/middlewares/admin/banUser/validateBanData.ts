import { z } from "zod";
import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";

import { sendError } from "../../../utils/response";


const schema = z.object({
  until: z.string().datetime().or(z.string().refine(v => !isNaN(Date.parse(v)), {
    message: "Invalid date"
  })),
});

export const validateBanData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = schema.safeParse(req.body);
  if (!result.success)
    return sendError(res, StatusCodes.BAD_REQUEST, "Invalid ban data");

  res.locals.untilDate = new Date(req.body.until);
  next();
};
