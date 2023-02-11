import mongoose from "mongoose";

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    trim: true,
    required: true,
  },
  countInStock: {
    type: Number,
    trim: true,
    required: true,
  },
  rating: {
    type: Number,
    trim: true,
    required: true,
  },
  numReviews: {
    type: Number,
    trim: true,
    required: true,
  },
});

export default mongoose.model("Product", ProductSchema);
