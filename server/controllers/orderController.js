import mongoose from "mongoose";
import Order from "../models/Order.js";

export const addOrder = async (req, res) => {
  const {
    products,
    user,
    name,
    email,
    city,
    country,
    postalCode,
    address,
    orderPlacedDate,
    orderDeliverDate,
    total,
    paymentMethod,
  } = req.body;

  try {
    const createOrder = await Order.create({
      products,
      user,
      name,
      email,
      city,
      country,
      postalCode,
      address,
      orderPlacedDate,
      orderDeliverDate,
      total,
      paymentMethod,
    });

    res.status(200).json({
      message: "success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error adding the order",
      error,
    });
  }
};

export const getOrders = async (req, res) => {
  const { user } = req.body;

  try {
    const getOrder = await Order.find({
      user: user,
    }).populate("products.product");

    res.status(200).json({
      message: "success",
      orders: getOrder,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting the orders",
      error,
    });
  }
};
