import { Router } from "express";

import { protect } from "../../middleware/auth";
import {
  handleCreateQuestion,
  handleDeleteQuestion,
  handleGetQuestions,
} from "./question.controller";

const router = Router();

router.get("/", handleGetQuestions);

router.post("/", protect, handleCreateQuestion);

router.delete("/:id", protect, handleDeleteQuestion);

export default router;