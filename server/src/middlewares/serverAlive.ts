import { Request, Response } from "express";

import { sendSuccess } from "../utils/response";

export const apiServerAlive = (_req: Request, res: Response) =>
    sendSuccess(res, "✅ Nesher Overflow API is running");