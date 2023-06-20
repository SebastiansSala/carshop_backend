import mongoose, { Schema } from "mongoose";
import { User } from "../types";

const userSchema = new Schema<User>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const userModel = mongoose.model("users", userSchema);