import express from "express";

import userRoutes from "../modules/user/user.routes";
import questionRoutes from "../modules/question/question.routes";

const router = express.Router();

router.use("/auth", userRoutes);
router.use("/questions", questionRoutes);

export default router;
