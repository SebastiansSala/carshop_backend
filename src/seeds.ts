import { faker } from "@faker-js/faker";
import { Model } from "mongoose";
import { Car } from "./types";

export function create(model: Model<Car>): Car {
  const data = {
    brand: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    year: faker.number.int({ min: 2000, max: 2023 }),
    color: faker.vehicle.color(),
    price: faker.number.int({ min: 1000, max: 50000 }),
  };

  const newData = new model(data);
  newData.save();
  return newData;
}

export async function addImg(model: Model<Car>): Promise<Car>{
  const cars = await model.find();
  return cars
}

