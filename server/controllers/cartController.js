import mongoose from "mongoose";
import Cart from "../models/Cart.js";

const ObjectId = mongoose.ObjectId;

export const addToCart = async (req, res) => {
  const { user, products } = req.body;

  try {
    // const createCart = await Cart.create({
    //   user,
    //   products,
    // });
    const addToCart = await Cart.findOneAndUpdate(
      {
        user: user,
      },
      {
        $push: {
          products: {
            $each: products.map((p) => ({
              product: p.product,
              quantity: p.quantity,
            })),
          },
        },
      },
      {
        upsert: true,
        new: true,
      }
    );

    res.status(200).json({
      message: "success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error adding to the cart",
      error,
    });
  }
};

export const getCart = async (req, res) => {
  const { user } = req.body;

  try {
    const getCart = await Cart.find({
      user: user,
    }).populate("products.product");

    res.status(200).json({
      message: "success",
      cart: getCart,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting the cart",
      error,
    });
  }
};

export const deleteFromCart = async (req, res) => {
  const { user, products } = req.body;

  try {
    const deleteFromCart = await Cart.findOneAndUpdate(
      {
        user: user,
      },
      {
        $pull: { products: { product: products } },
      }
    );

    res.status(200).json({
      message: "success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error deleting the product",
      error,
    });
  }
};
