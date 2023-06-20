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

app.set("port", process.env.PORT || 5000);
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(router);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Conexión exitosa a la base de datos");
    /*
    for (let i = 0; i < 10; i++) {
      create(toyotaModel);
      create(bmwModel);
      create(fordModel);
      create(chevroletModel);
      create(hondaModel);
      create(mercedesModel);
    }*/
    app.listen(app.get("port"), () => {
      console.log(`Server on port ${app.get("port")}`);
    });
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1);
  }
};

connectDB();
