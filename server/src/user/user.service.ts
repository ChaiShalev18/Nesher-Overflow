
import { hashPassword, comparePassword } from "../utils/password.ts";
import { generateToken } from "../utils/auth.ts";
import { UserModel } from "./user.model.ts";

export const registerUserService = async ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}): Promise<{ userId: string }> => {
  const existing = await UserModel.findOne({ email });
  if (existing) throw new Error("Email already in use");

  const hashed = await hashPassword(password);

  const user = await UserModel.create({
    username,
    email,
    password: hashed,
    role: "user",
  });

  return { userId: user._id.toString() };
};

export const loginUserService = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<{ token: string }> => {
  const user = await UserModel.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const match = await comparePassword(password, user.password);
  if (!match) throw new Error("Invalid credentials");

  const token = generateToken({ userId: user._id, role: user.role });
  return { token };
};
