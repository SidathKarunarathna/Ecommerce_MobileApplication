import express from "express";
import { signUp } from "../controllers/userController.js";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    data: "hello world from GROCERY LAKE!!!",
  });
});

router.post("/sign-up", signUp);

export default router;
