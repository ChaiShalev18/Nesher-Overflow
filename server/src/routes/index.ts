import express from "express";

import userRoutes from "../modules/user/user.routes";
import answerRoutes from "../modules/answer/answer.routes";
import questionRoutes from "../modules/question/question.routes";

const router = express.Router();

router.use("/auth", userRoutes);
router.use("/questions", questionRoutes);
router.use("/answers", answerRoutes);

export default router;
