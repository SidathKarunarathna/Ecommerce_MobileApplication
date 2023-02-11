import express from "express";
import {
  addToCart,
  deleteFromCart,
  getCart,
} from "../controllers/cartController.js";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    data: "hello world from GROCERY LAKE!!!",
  });
});

router.post("/add", addToCart);
router.post("/getCart", getCart);
router.post("/delete", deleteFromCart);

export default router;
