import { Request } from "express";
import { Role } from "./roles";

export interface AuthenticatedRequest extends Request {
	user: {
		id: string;
		role: Role;
		tokenId: string;
	};
}
