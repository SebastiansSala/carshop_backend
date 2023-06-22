import express from "express";
import carsRouter from "./cars";
import authRouter from "./auth";

const router = express.Router();

router.use("/cars", carsRouter);
router.use("/users", authRouter);

export default router;
