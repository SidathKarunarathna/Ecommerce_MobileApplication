import express from "express";
import { addOrder, getOrders } from "../controllers/orderController.js";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    data: "hello world from GROCERY LAKE!!!",
  });
});

router.post("/add", addOrder);
router.post("/getOrders", getOrders);

export default router;
