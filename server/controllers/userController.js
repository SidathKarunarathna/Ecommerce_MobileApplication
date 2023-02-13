import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import User from "../models/User.js";

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const createUser = await User.create({
      name,
      email,
      password,
    });

    res.status(200).json({
      message: "success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating new user",
      error,
    });
  }
};

export const signIn = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const loggedUser = await User.findOne({ email: email });

    if (loggedUser) {
      const isMatch = await bcryptjs.compare(password, loggedUser.password);

      if (isMatch) {
        res.status(200).json({
          message: "Success",
          user: {
            id: loggedUser._id,
            name: loggedUser.name,
            email: loggedUser.email,
          },
        });
      } else {
        res.status(400).json({
          message: "Invalid Password",
        });
      }
    } else {
      res.status(400).json({
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};
