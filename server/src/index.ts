import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("API is live");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));