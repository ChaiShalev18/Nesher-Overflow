import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { sendSuccess } from "../../../utils/response";
import { Question } from "../../../models/question.model";

export const saveQuestion = async (req: Request, res: Response) => {
  const question = await Question.create({
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags || [],
    author: res.locals.user.id,
  });

  return sendSuccess(res, question, StatusCodes.CREATED);
};
