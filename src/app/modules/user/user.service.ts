import ApiError from "../../../errors/ApiError";
import { IUser } from "./user.interface";
import User from "./user.model";
import { StatusCodes } from "http-status-codes";

const createUser = async (user: IUser): Promise<IUser | null> => {
  const isEmailExist = await User.findOne({ email: user.email });
  if (isEmailExist) {
    throw new ApiError(StatusCodes.CONFLICT, "Email is already in use!");
  }

  const createdUser = await User.create(user);
  if (!createdUser) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Failed to create user."
    );
  }

  const result = await User.findById(createdUser._id);
  return result;
};

export const UserService = {
  createUser,
};
