import jwt from "jsonwebtoken";
import ms from "ms";
import { v4 as uuidv4 } from "uuid";
import { BlacklistedToken } from "../models/token/blacklistedToken.model";
import { IUser } from "../models/user.model";
import { env } from "../config/env";

interface TokenResult {
  token: string;
  tokenId: string;
}

export const generateToken = (user: IUser): TokenResult => {
  const tokenId = uuidv4();
  const token = jwt.sign(
    { userId: user._id, tokenId },
    env.jwtSecret,
    { expiresIn: env.jwtExpiration }
  );

  return { token, tokenId };
};

export const invalidateToken = async (tokenId: string) =>
  await BlacklistedToken.create({
    tokenId,
    expiresAt: new Date(Date.now() + ms(env.jwtExpiration)),
  });

export const isTokenBlacklisted = async (tokenId: string) =>
  !!(await BlacklistedToken.findOne({ tokenId }));
