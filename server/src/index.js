import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import {
  clientRoute,
  generalRoute,
  managementRoute,
  salesRoute,
} from "./routes/index.js";

/* CONFIGURATION */
dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

/* ROUTES */
app.use("/client", clientRoute);
app.use("/general", generalRoute);
app.use("/management", managementRoute);
app.use("/sales", salesRoute);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 5001;
mongoose.set("strictQuery", false);
const MONGO_URL =
  "mongodb+srv://creative:201347@cluster0.h648riv.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to the Database`);
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
