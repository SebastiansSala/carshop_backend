import express from "express";
import * as user from "../controllers/user.controller";
import { validateSignup, validateLogin } from "../middlewares/auth";
import passport from "../config/passport-config";
const router = express.Router();

//get all cars
router.get("/", user.getUsers);

router.get(
  "/user",
  passport.authenticate("jwt", { session: false }),
  (req, res) => res.json(req.user)
);

//get specific car brand
router.post("/signup", validateSignup, user.signup);

//get specific car model
router.post("/login", validateLogin, user.login);

//delete user
router.delete("/:id", user.deleteUser);

export default router;
