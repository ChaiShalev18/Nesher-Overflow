import axios from "../../api/axios";

export const loginApi = (data: { email: string; password: string }) =>
  axios.post("/auth/login", data);

export const registerApi = (data: { email: string; password: string }) =>
  axios.post("/auth/register", data);

export const fetchMe = () => axios.get("/auth/me");
