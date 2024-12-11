import { model, Model, Schema } from "mongoose";
import { userRoles } from "./user.constant";
import { IUser, UserModel } from "./user.interface";

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
      select: false,
    },
    address: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: userRoles,
      default: "user",
    },
    phone: {
      type: String,
      trim: true,
    },
    acceptTerms: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);


const User = model<IUser, UserModel>("User", UserSchema);

export default User;
