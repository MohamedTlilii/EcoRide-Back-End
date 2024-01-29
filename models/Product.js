const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is required field"],
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
      required: [true, "Description  is required field"],
    },
    imageUrls: {
      type: [String],
    },
    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Product = mongoose.model("products", productSchema);
