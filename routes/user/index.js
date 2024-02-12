const express = require("express");
const route = express.Router();
const verifiedToken = require("../../middlewares/verifyToken");
const upload = require("../../middlewares/multer");

// register
route.post("/register", require("./register"));
// login
route.post("/login", require("./login"));

// update user photo
route.put(
  "/updatePhoto",
  verifiedToken,
  upload.single("photo"),
  require("./updatePhoto")
);

// get information
route.get("/getInformation", verifiedToken, require("./GetInformation"));

// update information
route.put("/updateInformation", verifiedToken, require("./updateInformation"));

// get products
route.get("/getProducts", require("./getProducts"));

// get single product
route.get("/getSingleProduct/:id", require("./getSingleProduct"));

// add Review
route.post("/addReview/:productId", verifiedToken, require("./addReview"));

//  get Reviews
route.get("/getReviews/:productId", require("./getReviews"));

// update Review
route.put("/updateReview/:reviewId", verifiedToken, require("./updateReview"));

// delete Review
route.delete(
  "/deleteReview/:reviewId",
  verifiedToken,
  require("./deleteReview")
);

//  get Own Order
route.get("/getOwnOrder", verifiedToken, require("./getOwnOrder"));

//  create Order
route.post("/createOrder", verifiedToken, require("./createOrder"));

// addProductToCart
route.post(
  "/addProductToCart/:productId",
  verifiedToken,
  require("./addProductToCart")
);

//  get Own Cart
route.get("/getOwnCart", verifiedToken, require("./getOwnCart"));

// update product quantity from cart
route.put(
  "/incProductQuantityFromCart/:productId",
  verifiedToken,
  require("./incProductQuantityFromCart")
);

// update product quantity from cart
route.put(
  "/decProductQuantityFromCart/:productId",
  verifiedToken,
  require("./decProductQuantityFromCart")
);

// delete product from cart
route.delete(
  "/removeProductFromCart/:productId",
  verifiedToken,
  require("./removeProductFromCart")
);

// delete cart
route.delete("/deleteCart", verifiedToken, require("./restartCart"));

module.exports = route;
