import mongoose from "mongoose";
import user from "../models/user.js";

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const createUser = await user.create({
      name,
      email,
      password,
    });

    res.status(200).json({
      message: "success",
      user: createUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating new user",
      error,
    });
  }
};
