const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    number: {
      type: String,
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
