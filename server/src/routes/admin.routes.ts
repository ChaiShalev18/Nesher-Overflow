import { Router } from "express";

import { validateBanData, updateBan } from "../middlewares/admin/banUser";
import { getAllUsers } from "../middlewares/admin/getAllUsers";
import { makeAdmin } from "../middlewares/admin/makeAdmin";
import { auth } from "../middlewares/auth";

const router = Router();

router.use(auth.admin);

router.get("/admin/users", getAllUsers);
router.patch("/admin/users/:id/ban", validateBanData, updateBan);
router.patch("/admin/users/:id/role", makeAdmin);

export default router;
