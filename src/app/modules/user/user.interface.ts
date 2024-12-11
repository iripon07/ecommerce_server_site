import { Model } from "mongoose";
import { Role } from "./user.constant";

export interface IUser extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  address?: string;
  role: Role;
  phone?: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type UserModel = {
  isUserExist(
    email: string
  ): Promise<Pick<IUser, "id" | "email" | "password" | "role">>;
  isPasswordMatch(
    givenPassword: string,
    savePassword: string
  ): Promise<boolean>;
} & Model<IUser>;
