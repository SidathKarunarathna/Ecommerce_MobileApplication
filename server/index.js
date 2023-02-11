import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/review", reviewRoutes);
app.use("/cart", cartRoutes);
app.use("/order",orderRoutes);

app.listen(8080, () => {
  console.log("server started at port 8080");
});

mongoose
  .connect(process.env.DATABASE, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
