import express from "express";
import {
  addProduct,
  getOneProduct,
  getProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    data: "hello world from GROCERY LAKE!!!",
  });
});

router.post("/add", addProduct);
router.post("/getProducts", getProducts);
router.post("/getOneProduct", getOneProduct);

export default router;
