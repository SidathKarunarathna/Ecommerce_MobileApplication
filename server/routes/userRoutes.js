import express from "express";
import { signUp, signIn } from "../controllers/userController.js";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    data: "hello world from GROCERY LAKE!!!",
  });
});

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);

export default router;
