import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { StatusCodes } from "http-status-codes";
import { sendError } from "../../utils/response";

export const userSchemas = {
  login: z.object({
    email: z.string().email(),
    password: z.string().min(6),
  }),
  register: z.object({
    email: z.string().email(),
    password: z.string().min(6),
  }),
  update: z.object({
    email: z.string().email(),
    password: z.string().min(6),
  }),
};

export const validateUserSchema = (schema: keyof typeof userSchemas) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = userSchemas[schema].safeParse(req.body);
    if (!result.success) {
      return sendError(res, StatusCodes.BAD_REQUEST, "Invalid user data");
    }
    next();
  };
