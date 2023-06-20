import { Request, Response, NextFunction } from "express";
import {
  toyotaModel,
  bmwModel,
  fordModel,
  chevroletModel,
  hondaModel,
  mercedesModel,
} from "../models/car";
import { Car } from "../types";

const carBrands: { [key: string]: any } = {
  toyota: toyotaModel,
  bmw: bmwModel,
  ford: fordModel,
  chevrolet: chevroletModel,
  honda: hondaModel,
  mercedes: mercedesModel,
};

export const getAllCars = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //get an array of all the cars
    let allCarsList: Car[] = [];
    for (let brand in carBrands) {
      const CarModel = carBrands[brand];
      const cars = await CarModel.find({});
      allCarsList = [...allCarsList, ...cars];
    }
    res.json(allCarsList);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving cars" });
    next(error);
  }
};

export const getCarsBrand = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { brand } = req.params;
    const brandLowerCase = brand.toLowerCase();
    const CarBrand = carBrands[brandLowerCase];

    if (!CarBrand) {
      return res.status(404).json({ message: "Brand not found" });
    }
    console.log(CarBrand)

    const cars = await CarBrand.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving cars from brand" });
    next(error);
  }
};

export const getCarModel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { brand, model } = req.params;
    const CarBrand = carBrands[brand];
    if (!CarBrand) {
      return res.status(404).json({ message: "Brand not found" });
    }
    const car = await CarBrand.findOne({ model });
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving car" });
    next(error);
  }
};

export const deleteCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { brand, model } = req.params;
    const CarModel = carBrands[brand];

    if (!CarModel) {
      return res.status(404).json({ message: "Brand not found" });
    }

    const car = await CarModel.findOneAndDelete({ model });
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.json({ message: "Car deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting car" });
    next(error);
  }
};
