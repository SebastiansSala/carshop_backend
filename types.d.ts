import { Document } from "mongoose";

export interface Car extends Document {
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
