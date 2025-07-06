import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Answer } from "../../../models/answer.model";
import { sendSuccess } from "../../../utils/response";

export const deleteAnswer = async (req: Request, res: Response) => {
  await Answer.findByIdAndDelete(req.params.answerId);
  
  return sendSuccess(res, "Answer deleted", StatusCodes.OK);
};
