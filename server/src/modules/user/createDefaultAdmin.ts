import { hashPassword } from "../../utils/password";
import { User } from "./user.model";
import { Role } from "../../types/roles";
import { env } from "../../config/env";

export const createDefaultAdmin = async () => {
  const existingAdmin = await User.findOne({ email: env.adminEmail });

  if (!existingAdmin) {
    const hashedPassword = await hashPassword(env.adminPassword);

    await User.create({
      email: env.adminEmail,
      password: hashedPassword,
      role: Role.Admin,
    });

    console.log("✅ Default admin user created");
  } else {
    console.log("ℹ️ Default admin already exists");
  }
};
