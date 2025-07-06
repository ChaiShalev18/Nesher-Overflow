import { AsyncRouter } from "express-async-router";
import userRoutes from "./user.routes";

const router = AsyncRouter();

router.use("/auth", userRoutes);
// router.use("/questions", questionRoutes);
// router.use("/answers", answerRoutes);
// router.use("/ban", banRoutes);

export default router;
