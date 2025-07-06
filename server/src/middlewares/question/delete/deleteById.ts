import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { Question } from "../../../models/question.model";
import { sendSuccess } from "../../../utils/response";

export const deleteById = async (req: Request, res: Response) => {
  await Question.findByIdAndDelete(req.params.id);
  
  return sendSuccess(res, "Question deleted", StatusCodes.OK);
};
