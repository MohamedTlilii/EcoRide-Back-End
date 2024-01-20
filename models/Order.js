// models/Order.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    totall: {
      type: Number,
    },
    cart: {
      type: [],
    },
    isConfirmed: {
      type: Boolean,
    },
    isDelevered: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Order = mongoose.model('orders', orderSchema);
