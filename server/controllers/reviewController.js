import mongoose from "mongoose";
import Review from "../models/Review.js";

export const addReview = async (req, res) => {
  const { product, userName, review } = req.body;

  try {
    const createReview = await Review.create({
      product,
      userName,
      review,
    });

    res.status(200).json({
      message: "success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating the review",
      error,
    });
  }
};

export const getReview = async (req, res) => {
  const { product } = req.body;

  try {
    const getReview = await Review.find({
      product: product,
    });

    res.status(200).json({
      message: "success",
      reviews: getReview,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting the review",
      error,
    });
  }
};
