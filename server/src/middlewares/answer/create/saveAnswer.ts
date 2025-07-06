import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { sendSuccess } from "../../../utils/response";



export const saveAnswer = async (req: Request, res: Response) => {
  const answer = await Answer.create({
    content: req.body.content,
    question: res.locals.question._id,
    author: res.locals.user.id,
  });

  return sendSuccess(res, answer, StatusCodes.CREATED);
};
