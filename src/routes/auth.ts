import express from "express";
import * as user from '../controllers/user.controller'
import { validateLogin, validateSignup } from "../middlewares/auth";
const router = express.Router();

//get all cars
router.get("/", user.getUsers);

//get specific car brand
router.post("/signup", validateSignup, user.createUser);

//get specific car model
router.post("/login", validateLogin, user.getUser);

//delete user
router.delete("/:id", user.deleteUser);

export default router;
