import { Role } from "../../types/roles";

declare global {
  namespace Express {
    interface Locals {
      user: {
        id: string;
        role: Role;
      };
    }
  }
}
