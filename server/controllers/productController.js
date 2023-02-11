import mongoose from "mongoose";
import Product from "../models/Product.js";

export const addProduct = async (req, res) => {
  const { name, image, description, price, countInStock, rating, numReviews } =
    req.body;

  try {
    const product = await Product.create({
      name,
      image,
      description,
      price,
      countInStock,
      rating,
      numReviews,
    });

    res.status(200).json({
      message: "success",
      product: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating the product",
      error,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      message: "success",
      products: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting all products",
      error,
    });
  }
};

export const getOneProduct = async (req, res) => {
  const { productId } = req.body;
  try {
    const product = await Product.find({ _id: productId });

    res.status(200).json({
      message: "success",
      products: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting the product",
      error,
    });
  }
};
