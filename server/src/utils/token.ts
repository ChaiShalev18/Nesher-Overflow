import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { Role } from "../types/roles";

export const generateToken = (userId: string, role: Role, tokenId: string): string => {
	return jwt.sign({ id: userId, role, tokenId }, env.jwtSecret, {
		expiresIn: "1h",
	});
};
