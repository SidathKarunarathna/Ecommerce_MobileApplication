import express from "express";
import { addReview, getReview } from "../controllers/reviewController.js";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    data: "hello world from GROCERY LAKE!!!",
  });
});

router.post("/addReview", addReview);
router.post("/getReviews", getReview);

export default router;
