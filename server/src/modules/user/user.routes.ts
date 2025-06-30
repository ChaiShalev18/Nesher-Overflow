import { Router } from "express";

import { Role } from "../../types/roles";
import { protect, authorize } from "../../middleware/auth";
import { loginRateLimiter } from "../../middleware/loginRateLimit";
import { login, register, logout, resetPassword } from "./user.controller";

const router = Router();

router.post("/register", register);
router.post("/login", loginRateLimiter, login);
router.post("/logout", protect, logout);
router.post("/reset-password", protect, resetPassword);

//router.get("/admin", protect, authorize(Role.Admin), getAdmin);

export default router;
