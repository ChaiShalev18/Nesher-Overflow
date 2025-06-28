import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { createQuestion, getQuestions, deleteQuestion } from "./question.service";
import { sendError, sendSuccess } from "../../utils/response";
import { Role } from "../../types/roles";

export const handleCreateQuestion = async (
	req: Request<{}, {}, { title: string; content: string }>,
	res: Response
) => {
	try {
		const { title, content } = req.body;
		const { id: userId } = res.locals.user;

		const question = await createQuestion({ title, content, authorId: userId });

		return sendSuccess(res, StatusCodes.CREATED, question);
	} catch (error) {
		return sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, "Failed to create question");
	}
};

export const handleGetQuestions = async (
	req: Request<
		{},
		{},
		{},
		{ search?: string; sortBy?: "newest" | "popular"; favoriteOnly?: string }
	>,
	res: Response
) => {
	try {
		const { search, sortBy, favoriteOnly } = req.query;
		const userId = res.locals.user?.id;

		const questions = await getQuestions({
			search,
			sortBy,
			favoriteOnly: favoriteOnly === "true",
			userId,
		});

		return sendSuccess(res, StatusCodes.OK, questions);
	} catch (error) {
		return sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, "Failed to fetch questions");
	}
};

export const handleDeleteQuestion = async (req: Request<{ id: string }>, res: Response) => {
	try {
		const questionId = req.params.id;
		const { id: userId, role } = res.locals.user;

		const question = await deleteQuestion(questionId, userId, role === Role.Admin);

		return sendSuccess(res, StatusCodes.OK, question);
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : "Failed to delete question";
		return sendError(res, StatusCodes.BAD_REQUEST, errorMessage);
	}
};
