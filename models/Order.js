// models/Order.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    totall: {
      type: Number,
    },
    cart: {
      type: [String],
    },
    isConfirmed: {
      type: Boolean,
    },
    isDelevered: {
      type: Boolean,
      default: false,
    },
    yourOrder: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Order = mongoose.model("orders", orderSchema);
