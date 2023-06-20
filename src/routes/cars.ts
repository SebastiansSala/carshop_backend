import express from "express";
import * as carsController from "../controllers/cars.controller";
const router = express.Router();

//get all cars
router.get("/", carsController.getAllCars);

//get specific car brand
router.get("/:brand", carsController.getCarsBrand);

//get specific car model
router.get("/:brand/:model", carsController.getCarModel);
//router.post("/:brand/:model");
//router.put("/:brand/:model");
router.delete("/:brand/:model", carsController.deleteCar);

export default router;
