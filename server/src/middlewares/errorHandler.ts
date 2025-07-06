import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { sendError } from "../utils/response";

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Unhandled error:", err);

  return sendError(
    res,
    StatusCodes.INTERNAL_SERVER_ERROR,
    err instanceof Error ? err.message : "Internal Server Error"
  );
};
