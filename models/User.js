const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "firstName is required field"],
    },
    lastName: {
      type: String,
      required: [true, "lastName is required field"],
    },
    address: {
      type: String,
      required: [true, "address is required field"],
    },
    city: {
      type: String,
      required: [true, "city is required field"],
    },
    number: {
      type: String,
      required: [true, "number is required field"],
    },

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
        "https://static.vecteezy.com/ti/vecteur-libre/p3/12911441-icone-de-profil-d-avatar-par-defaut-dans-le-style-de-ligne-vectoriel.jpg",
    },
    isUser: {
      type: Boolean,
      default: true,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model("users", userSchema);
