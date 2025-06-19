import jwt from "jsonwebtoken";
import { env } from "../config/env.ts";

export const generateToken = (payload: object, expiresIn = "1d"): string => {
  return jwt.sign(payload, env.jwtSecret, { expiresIn });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, env.jwtSecret);
};
