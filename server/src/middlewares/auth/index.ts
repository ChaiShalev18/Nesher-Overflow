import { requireAdmin } from "./requireAdmin";
import { requireAuth } from "./requierAuth";

export const auth = {
  user: [...requireAuth],
  admin: [...requireAuth, requireAdmin],
};
