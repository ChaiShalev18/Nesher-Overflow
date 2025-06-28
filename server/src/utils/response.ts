import { Response } from "express";

export const sendSuccess = (res: Response, status: number, data: object) => {
	return res.status(status).json({ success: true, ...data });
};

export const sendError = (res: Response, status: number, message: string) => {
	return res.status(status).json({ success: false, message });
};
