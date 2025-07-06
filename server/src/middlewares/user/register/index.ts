import { issueToken } from "../issueToken";
import { validateUserSchema } from "../validateUserSchema";
import { checkEmailNotTaken } from "./checkEmailNotTaken";
import { createUser } from "./createUser";
import { hashPassword } from "./hashPassword";

export const register = [
  validateUserSchema("register"),
  checkEmailNotTaken,
  hashPassword,
  createUser,
  issueToken,
];