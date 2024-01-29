const express = require("express");
const route = express.Router();
const verifiedToken = require("../../middlewares/verifyToken");
const upload = require("../../middlewares/multer");

// register
// route.post("/register", require("./register"));

// login
route.post("/login", require("./login"));

// add product
route.post(
  "/addProduct",
  verifiedToken,
  upload.array("photo", 5),
  require("./addProduct")
);

// get products
route.get("/getProducts", require("./getProducts"));

// get single product
route.get(
  "/getSingleProduct/:id",
  verifiedToken,
  require("./getSingleProduct")
);

// update product
route.put(
  "/updateProduct/:id",
  verifiedToken,
  upload.array("photos", 5),
  require("./updateProduct")
);

// delete product
route.delete(
  "/deleteProduct/:productId",
  verifiedToken,
  require("./deleteProduct")
);

// get users
route.get("/getUsers", verifiedToken, require("./getUsers"));

// ban user
route.put("/banUser/:userId", verifiedToken, require("./banUser"));

// unban user
route.put("/unbanUser/:userId", verifiedToken, require("./unbanUser"));

// update admin photo
route.put(
  "/updateAdminPhoto",
  verifiedToken,
  upload.single("photo"),
  require("./updateAdminPhoto")
);

// update information
route.put("/updateInformation", verifiedToken, require("./updateInformation"));

// get product reviews
route.get(
  "/getProductReviews/:productId",
  verifiedToken,
  require("./getProductReviews")
);

// delete Review
route.delete(
  "/deleteReview/:reviewId",
  verifiedToken,
  require("./deleteReview")
);

// new routes

// get orders
route.get("/getOrders", verifiedToken, require("./getOrders"));

// confirm order
route.put("/confirmOrder/:orderId", verifiedToken, require("./confirmOdrer"));

// deliver order
route.put("/deliverOrder/:orderId", verifiedToken, require("./deliverOrder"));

module.exports = route;
