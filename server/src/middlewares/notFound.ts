import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { sendError } from "../utils/response";

export const notFound = (req: Request, res: Response, next: NextFunction) =>
  sendError(res, StatusCodes.NOT_FOUND, `Route ${req.originalUrl} not found`);
