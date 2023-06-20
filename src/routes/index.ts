import express from "express";
import carsRouter from "./cars"

const router = express.Router();

router.use("/cars", carsRouter);

export default router;
