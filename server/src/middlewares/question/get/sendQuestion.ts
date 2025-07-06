import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { sendSuccess } from "../../../utils/response";

export const sendQuestion = (req: Request, res: Response) =>
  sendSuccess(res, res.locals.question, StatusCodes.OK);
