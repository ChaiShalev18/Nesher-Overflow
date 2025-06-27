import express, { Request, Response } from "express";

import router from "./routes";

const app = express();

app.use(express.json());

app.use("/api", router);
app.get("/", (_req: Request, res: Response) => {
  res.send("✅ Nesher Overflow API is running");
});

export default app;
