import { Request, Response } from "express";
import { registerUserService, loginUserService } from "./user.service.ts";
import { success, error } from "../utils/apiResponse.ts";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const result = await registerUserService(req.body);

    return success(res, result, 201);
  } catch (err: any) {
    return error(res, err.message, 400);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await loginUserService(req.body);
	
    return success(res, result);
  } catch (err: any) {
    return error(res, err.message, 401);
  }
};
