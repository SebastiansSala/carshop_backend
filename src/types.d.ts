import { Document } from "mongoose";
import { string, object } from "yup";

export interface Car extends Document {
  img?: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
}

export interface User extends Document {
  username: string;
  email: string;
  password: string;
}
