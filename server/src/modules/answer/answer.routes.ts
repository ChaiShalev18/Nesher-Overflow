import { Router } from "express";

import { protect } from "../../middleware/auth";
import {
  handleCreateAnswer,
  handleDeleteAnswer,
  handleVoteAnswer,
  handleGetAnswersForQuestion,
} from "./answer.controller";

const router = Router();

router.get("/:questionId", handleGetAnswersForQuestion);
router.post("/:questionId", protect, handleCreateAnswer);
router.post("/vote/:id", protect, handleVoteAnswer);
router.delete("/:id", protect, handleDeleteAnswer);

export default router;
