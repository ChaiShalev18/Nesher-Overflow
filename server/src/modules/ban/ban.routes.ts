import { Router } from "express";
import { protect, authorize } from "../../middleware/auth";
import { Role } from "../../types/roles";
import {
  handleBanUser,
  handleUnbanUser,
  handleCheckBanStatus,
} from "./ban.controller";

const router = Router();

router.post("/:userId", protect, authorize(Role.Admin), handleBanUser);
router.delete("/:userId", protect, authorize(Role.Admin), handleUnbanUser);
router.get("/:userId", protect, authorize(Role.Admin), handleCheckBanStatus);

export default router;