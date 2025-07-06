import { Router } from "express";

import { login } from "../middlewares/user/login";
import { register } from "../middlewares/user/register";
import { getProfile, updateProfile, deleteAccount } from "../middlewares/user/profile";
import { validateUserSchema } from "../middlewares/user/validateUserSchema";
import { auth } from "../middlewares/auth";
import { logoutHandler } from "../middlewares/user/logout/logoutHandler";

const router = Router();

router.post("/auth/login", login);
router.post("/auth/register", register);
router.post("/auth/logout", auth.user, logoutHandler);

router.get("/users/me", auth.user, getProfile);
router.patch("/users/me", auth.user, validateUserSchema("update"), updateProfile);
router.delete("/users/me", auth.user, deleteAccount);

export default router;
