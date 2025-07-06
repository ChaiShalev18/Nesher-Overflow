import { Router } from "express";

import { auth } from "../middlewares/auth";
import { validateQuestionData, saveQuestion } from "../middlewares/question/create";
import { validateObjectId, loadQuestionById, sendQuestion, filterQuestions, sendFilteredQuestions, validateFilters } from "../middlewares/question/get";
import { verifyOwnership, deleteById } from "../middlewares/question/delete";

const router = Router();

router.post("/questions", auth.user, validateQuestionData, saveQuestion);
router.get("/questions/:id", validateObjectId, loadQuestionById, sendQuestion);
router.get("/questions", validateFilters, filterQuestions, sendFilteredQuestions);
router.delete("/questions/:id", auth.user, validateObjectId, loadQuestionById, verifyOwnership, deleteById);

export default router;
