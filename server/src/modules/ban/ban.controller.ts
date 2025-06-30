import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { sendError, sendSuccess } from "../../utils/response";
import { banUser, unbanUser, isUserBanned } from "./ban.service";

export const handleBanUser = async (
  req: Request<{ userId: string }, {}, { reason: string; bannedUntil?: string }>,
  res: Response
) => {
  try {
    const { userId } = req.params;
    const { reason, bannedUntil } = req.body;

    const ban = await banUser(userId, reason, bannedUntil ? new Date(bannedUntil) : undefined);

    return sendSuccess(res, StatusCodes.CREATED, ban);
  } catch (error) {
    return sendError(res, StatusCodes.BAD_REQUEST, error instanceof Error ? error.message : "Failed to ban user");
  }
};

export const handleUnbanUser = async (
  req: Request<{ userId: string }>,
  res: Response
) => {
  try {
    const ban = await unbanUser(req.params.userId);
    return sendSuccess(res, StatusCodes.OK, ban);
  } catch (error) {
    return sendError(res, StatusCodes.BAD_REQUEST, error instanceof Error ? error.message : "Failed to unban user");
  }
};

export const handleCheckBanStatus = async (
  req: Request<{ userId: string }>,
  res: Response
) => {
  try {
    const banned = await isUserBanned(req.params.userId);
    return sendSuccess(res, StatusCodes.OK, { banned });
  } catch (error) {
    return sendError(res, StatusCodes.BAD_REQUEST, error instanceof Error ? error.message : "Failed to check ban status");
  }
};
