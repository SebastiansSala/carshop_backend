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
export const toyotaModel = mongoose.model<Car>("toyota", carSchema);
export const bmwModel = mongoose.model<Car>("bmw", carSchema);
export const fordModel = mongoose.model<Car>("ford", carSchema);
export const chevroletModel = mongoose.model<Car>("chevrolet", carSchema);
export const hondaModel = mongoose.model<Car>("honda", carSchema);
export const mercedesModel = mongoose.model<Car>("mercedes", carSchema);
