import { Request, Response, NextFunction } from "express";
import { hashPassword as hash } from "../../../utils/password";

export const hashPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.body.password = await hash(req.body.password);
  next();
};
