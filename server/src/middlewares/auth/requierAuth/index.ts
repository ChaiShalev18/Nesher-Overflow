import { extractToken } from "./extractToken";
import { verifyToken } from "./verifyToken";
import { checkBlacklist } from "./checkBlacklist";
import { loadUser } from "./loadUser";
import { checkUserToken } from "./checkUserToken";
import { checkUserNotBanned } from "../../user/checkUserNotBanned";

export const requireAuth = [
  extractToken,
  verifyToken,
  checkBlacklist,
  loadUser,
  checkUserToken,
  checkUserNotBanned,
];
