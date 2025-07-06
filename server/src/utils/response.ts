import { Response } from "express";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

export const sendSuccess = <T>(
  res: Response,
  data: T,
  status: StatusCodes = StatusCodes.OK
) => 
	res.status(status).json({
    status: "success",
    code: status,
    message: getReasonPhrase(status),
    data,
  });

export const sendError = (
  res: Response,
  status: StatusCodes,
  message?: string
) => 
	res.status(status).json({
    status: "error",
    code: status,
    message: message || getReasonPhrase(status),
  	});
