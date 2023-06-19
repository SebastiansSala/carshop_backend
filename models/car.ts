import mongoose, { Schema } from "mongoose";

import { Car } from "../types";

const carSchema = new Schema<Car>({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
export const toyotaModel = mongoose.model("toyota", carSchema);
export const bmwModel = mongoose.model("bmw", carSchema);
export const fordModel = mongoose.model("ford", carSchema);
export const chevroletModel = mongoose.model("chevrolet", carSchema);
export const hondaModel = mongoose.model("honda", carSchema);
export const mercedesModel = mongoose.model("mercedes", carSchema);
