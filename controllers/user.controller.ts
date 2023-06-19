import { Request, Response, NextFunction } from "express";
import { User } from "../types";
import { userModel } from "../models/User";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user: User = req.body;
    const newUser = new userModel(user);
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
    next(error);
  }
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, email, password }: User = req.body;
    
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error getting user" });
    next(error);
  }
};
