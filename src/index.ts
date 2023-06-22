import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import passport from "./config/passport-config";
import router from "./routes/index";
import { create } from "./seeds";
import {
  toyotaModel,
  bmwModel,
  chevroletModel,
  hondaModel,
  mercedesModel,
  fordModel,
} from "./models/car";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;

app.set("port", PORT);
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(router);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Conexión exitosa a la base de datos");
    app.listen(app.get("port"), () => {
      console.log(`Server on port ${app.get("port")}`);
    });
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1);
  }
};

connectDB();
