import mongoose from "mongoose";

const { Schema } = mongoose;

const ReviewSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  userName: {
    type: String,
    trim: true,
    required: true,
  },
  review: {
    type: String,
    trim: true,
    required: true,
  },
});

export default mongoose.model("Review", ReviewSchema);
