import { BanModel } from "./ban.model";
import { User } from "../user/user.model";

export const banUser = async (
  userId: string,
  reason: string,
  bannedUntil?: Date
) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  const existingBan = await BanModel.findOne({ user: user._id });
  if (existingBan) {
    throw new Error("User is already banned");
  }

  const ban = await BanModel.create({
    user: user._id,
    reason,
    bannedUntil: bannedUntil || null,
  });

  user.bannedUntil = bannedUntil ?? undefined;
  await user.save();

  return ban;
};

export const unbanUser = async (userId: string) => {
  const ban = await BanModel.findOneAndDelete({ user: userId });

  if (!ban) {
    throw new Error("User is not banned");
  }

  await User.findByIdAndUpdate(userId, { bannedUntil: null });

  return ban;
};

export const isUserBanned = async (userId: string) => {
  const ban = await BanModel.findOne({ user: userId });

  if (!ban) return false;

  if (!ban.bannedUntil) return true;

  return ban.bannedUntil.getTime() > Date.now();
};
