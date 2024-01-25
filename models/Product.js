const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is required field"],
    },
    price: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Description  is required field"],
    },

    images: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Product = mongoose.model("products", productSchema);
