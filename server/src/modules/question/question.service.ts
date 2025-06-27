import { FilterQuery, SortOrder } from "mongoose";
import QuestionModel, { Question } from "./question.model";

interface GetQuestionsOptions {
  search?: string;
  sortBy?: "newest" | "popular";
  favoriteOnly?: boolean;
  userId?: string;
}

export const createQuestion = async ({
  title,
  content,
  authorId,
}: {
  title: string;
  content: string;
  authorId: string;
}): Promise<Question> => {
  return QuestionModel.create({ title, content, author: authorId });
};

export const getQuestions = async ({
  search,
  sortBy = "newest",
  favoriteOnly,
  userId,
}: GetQuestionsOptions): Promise<Question[]> => {
  const query: FilterQuery<Question> = {};

  if (search) {
    query.title = { $regex: search, $options: "i" };
  }

  if (favoriteOnly && userId) {
    query.favoritedBy = userId;
  }

  const sortOption: { [key: string]: SortOrder } =
    sortBy === "popular" ? { favorites: -1 } : { createdAt: -1 };

  return QuestionModel.find(query)
    .sort(sortOption)
    .populate("author", "email");
};

export const deleteQuestion = async (
  questionId: string,
  userId: string,
  isAdmin = false
): Promise<Question> => {
  const question = await QuestionModel.findById(questionId);

  if (!question) {
    throw new Error("Question not found");
  }

  if (!isAdmin && question.author.toString() !== userId) {
    throw new Error("You are not allowed to delete this question");
  }

  await question.deleteOne();
  return question;
};
