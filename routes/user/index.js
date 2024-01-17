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

// get products
route.get(
  "/getProducts",
  verifiedToken,
  upload.array("photo", 5),
  require("./getProducts")
);

// update information
route.put("/updateInformation", verifiedToken, require("./updateInformation"));

// get single product
route.get(
  "/getSingleProduct/:id",
  verifiedToken,
  require("./getSingleProduct")
);

// add Review
route.post("/addReview/:productId", verifiedToken, require("./addReview"));

//  get Review
route.get("/getReviews/:productId", verifiedToken, require("./getReviews"));

// update Review
route.put("/updateReview", verifiedToken, require("./updateReview"));

module.exports = route;
