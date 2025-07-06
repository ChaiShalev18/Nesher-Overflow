import express from "express";

import router from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
import { notFound } from "./middlewares/notFound";
import { apiServerAlive } from "./middlewares/serverAlive"

const app = express();

app.use(express.json());

app.use("/api", router);
app.get("/", apiServerAlive);


app.use(notFound);
app.use(errorHandler);

export default app;
