import bcrypt from "bcryptjs";
import { User } from "./user.model";

export const findUserByEmail = async (email: string) =>
  await User.findOne({ email });

export const createUser = async (email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });

  return await user.save();
};