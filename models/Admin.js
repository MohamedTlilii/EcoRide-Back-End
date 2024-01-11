const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "Username is required field"],
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required field"],
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "This is invalid email",
      ],
    },
    imageUrl: {
      type: String,
      default:
        "https://c8.alamy.com/comp/2PY6T5Y/inspiration-showing-sign-admin-word-for-officials-in-executive-branch-of-government-people-responsible-2PY6T5Y.jpg",
    },
    isAdmin: {
      type: Boolean,
      default: true,
    },
   
  },
  {
    timestamps: true,
  }
);

module.exports = Admin = mongoose.model("admin", adminSchema);
