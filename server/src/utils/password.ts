import bcrypt from "bcryptjs";

const SALT_ROUND = 10;

export const hashPassword = async (password: string) =>
	await bcrypt.hash(password, SALT_ROUND);

export const comparePasswords = async (plain: string, hashed: string) =>
	await bcrypt.compare(plain, hashed);
