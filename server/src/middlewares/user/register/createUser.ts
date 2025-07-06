import { Request, Response, NextFunction } from "express";

import { User } from "../../../models/user.model";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await User.create({
    email: req.body.email,
    password: req.body.password,
  });

  res.locals.user = user;
  next();
};
