import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import argon2 from "argon2";
import { User } from "../types";
import { userModel } from "../models/user";
import "dotenv/config";

const SECRET_KEY = process.env.SECRET_KEY;

const createToken = (user: User) => {
  try {
    const { _id, email, username } = user;
    const token = jwt.sign(
      { _id, email, username },
      JSON.stringify(SECRET_KEY)
    );
    return token;
  } catch (error) {
    throw new Error("Failed to create token");
  }
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await userModel.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
    next(error);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, username, password } = req.body;
    const hashedPassword = await argon2.hash(password);
    const newUser = new userModel({
      email,
      username,
      password: hashedPassword,
    });
    const createdUser = await newUser.save();
    const token = createToken(createdUser);

    res.status(201).json({ token, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error instanceof Error ? error.message : undefined,
    });
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password }: User = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "The email doesn't exist" });
    }

    const passwordMatch = await argon2.verify(user.password, password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Password incorrect" });
    }
    const token = createToken(user);
    return res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error getting user" });
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.status(201).json("User deleted successfully");
  } catch (error) {
    res.status(500).json({ message: "Error deleting user" });
    next(error);
  }
};
