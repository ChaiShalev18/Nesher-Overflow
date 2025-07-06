import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { User } from "../../models/user.model";
import { sendSuccess } from "../../utils/response";
import { generateToken } from "../../utils/token";

export const issueToken = async (req: Request, res: Response) => {
  const user = res.locals.user;
  const { token, tokenId } = generateToken(user);

  await User.findByIdAndUpdate(user._id, { currentTokenId: tokenId });

  return sendSuccess(res, { token }, StatusCodes.OK);
};
