import { findUserByEmail } from "./findUserByEmail";
import { issueToken } from "../issueToken";
import { validateUserSchema } from "../validateUserSchema";
import { checkPassword } from "./checkPassword";
import { checkUserNotBanned } from "../checkUserNotBanned";

export const login = [
  validateUserSchema("login"),
  findUserByEmail,
  checkPassword,
  checkUserNotBanned,
  issueToken,
];
