import { z } from "zod";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { sendError } from "../../../utils/response";



const schema = z.object({
  search: z.string().optional(),
  tags: z.string().optional(), // comma-separated
  author: z.string().optional(),
  sort: z.enum(["new", "updated"]).optional(),
});

export const validateFilters = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = schema.safeParse(req.query);
  if (!result.success)
    return sendError(res, StatusCodes.BAD_REQUEST, "Invalid filters");

  res.locals.filters = result.data;
  next();
};
