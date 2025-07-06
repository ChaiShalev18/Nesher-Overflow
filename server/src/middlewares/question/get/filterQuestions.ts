import { Request, Response, NextFunction } from "express";
import { Question } from "../../../models/question.model";

export const filterQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { search, tags, author, sort } = res.locals.filters;

  const query: any = {};

  if (search) {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { content: { $regex: search, $options: "i" } },
    ];
  }

  if (author) query.author = author;

  const sortBy = sort === "updated" ? "-updatedAt" : "-createdAt";

  const questions = await Question.find(query)
    .sort(sortBy)
    .populate("author", "email role");

  res.locals.questions = questions;
  next();
};
