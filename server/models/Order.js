import mongoose from "mongoose";

const { Schema } = mongoose;

const OrderSchema = new Schema({
  //product info
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  //user info
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },

  //shipping info
  city: {
    type: String,
    trim: true,
    required: true,
  },
  country: {
    type: String,
    trim: true,
    required: true,
  },
  postalCode: {
    type: String,
    trim: true,
    required: true,
  },
  address: {
    type: String,
    trim: true,
    required: true,
  },

  //order
  orderPlacedDate: {
    type: Date,
    trim: true,
    required: true,
  },
  orderDeliverDate: {
    type: Date,
    trim: true,
    required: true,
  },
  //payment
  total: {
    type: Number,
    trim: true,
    required: true,
  },
  paymentMethod: {
    type: String,
    trim: true,
    required: true,
  },
});

export default mongoose.model("Order", OrderSchema);
