import { NextFunction, Request, Response } from "express";
import { string, object } from "yup";
import { userModel } from "../models/user";

const signupSchema = object().shape({
  username: string().min(3).max(20).required(),
  email: string().email().required(),
  password: string().min(8).required(),
});

export const validateSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password)
      return res
        .status(401)
        .send(`Must have ${email}, ${username}, ${password}`);
    const validatedUser = await signupSchema.validate({
      email,
      username,
      password,
    });
    if (!validatedUser) return res.status(400).send("Incorrect pattern");
    const existingUser = await userModel.findOne({ email });
    if (existingUser) return res.status(400).send("User already exists");
    next();
  } catch (error) {
    console.error(error);
    return res.status(400).send("Incorrect pattern");
  }
};

const loginSchema = object().shape({
  email: string().required(),
  password: string().min(8).required(),
});

export const validateLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, username, password } = req.body;
    const validatedUser = await loginSchema.validate({
      email,
      password,
    });
    if (!validatedUser) return res.status(400).send("Incorrect pattern");
    next();
  } catch (error) {
    console.error(error);
    return res.status(400).send("Incorrect pattern");
  }
};
