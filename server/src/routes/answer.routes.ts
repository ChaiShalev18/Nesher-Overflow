import { AsyncRouter } from "express-async-router";

import { auth } from "../middlewares/auth";
import { validateQuestionId, verifyQuestionExists, validateAnswerBody, saveAnswer } from "../middlewares/answer/create";
import { validateAnswerId, verifyAnswerOwnership, deleteAnswer } from "../middlewares/answer/delete";
import { validateVoteRequest, applyVote } from "../middlewares/answer/vote";
import { loadAnswer } from "../middlewares/answer/loadAnswer";

const router = AsyncRouter();

router.post("/answers/:questionId", auth.user, validateQuestionId,
    verifyQuestionExists, validateAnswerBody, saveAnswer);
router.delete("/answers/:answerId", auth.user, validateAnswerId,
     loadAnswer, verifyAnswerOwnership, deleteAnswer);
router.patch("/answers/:answerId/vote", auth.user, validateAnswerId, loadAnswer, validateVoteRequest, applyVote);

export default router;
