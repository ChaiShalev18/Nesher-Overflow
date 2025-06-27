import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { v4 as uuidv4 } from "uuid";

import { comparePassword } from "../../utils/password";
import { generateToken } from "../../utils/token";
import { sendError, sendSuccess } from "../../utils/response";
import { User } from "./user.model";
import { createUser, findUserByEmail } from "./user.service";

export const register = async (
  req: Request<{}, {}, { email: string; password: string }>,
  res: Response
) => {
  try {
    const { email, password } = req.body;

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return sendError(res, StatusCodes.BAD_REQUEST, "User already exists");
    }

    const user = await createUser(email, password);
    const tokenId = uuidv4();
    user.currentTokenId = tokenId;
    await user.save();

    const token = generateToken(user.id, user.role, tokenId);
    return sendSuccess(res, StatusCodes.CREATED, { token });
  } catch (error) {
    return sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, "Registration failed");
  }
};

export const login = async (
  req: Request<{}, {}, { email: string; password: string }>,
  res: Response
) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    if (!user || !(await comparePassword(password, user.password))) {
      return sendError(res, StatusCodes.UNAUTHORIZED, "Invalid credentials");
    }

    if (user.bannedUntil && user.bannedUntil > new Date()) {
      return sendError(res, StatusCodes.FORBIDDEN, "User is banned");
    }

    const tokenId = uuidv4();
    user.currentTokenId = tokenId;
    await user.save();

    const token = generateToken(user.id, user.role, tokenId);
    return sendSuccess(res, StatusCodes.OK, { token });
  } catch (error) {
    return sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, "Login failed");
  }
};

export const logout = async (
  req: Request<{}, {}, {}, {}, { user: { id: string } }>,
  res: Response
) => {
  try {
    const user = await User.findById(res.locals.user.id);
    if (user) {
      user.currentTokenId = undefined;
      await user.save();
    }

    return sendSuccess(res, StatusCodes.OK, { message: "Logged out successfully" });
  } catch (error) {
    return sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, "Logout failed");
  }
};

export const resetPassword = async (
  req: Request<
    {},
    {},
    { currentPassword: string; newPassword: string },
    {},
    { user: { id: string } }
  >,
  res: Response
) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(res.locals.user.id);
    if (!user || !(await comparePassword(currentPassword, user.password))) {
      return sendError(res, StatusCodes.UNAUTHORIZED, "Invalid current password");
    }

    user.password = newPassword;
    user.currentTokenId = undefined;
    await user.save();

    return sendSuccess(res, StatusCodes.OK, { message: "Password reset successfully" });
  } catch (error) {
    return sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, "Password reset failed");
  }
};
