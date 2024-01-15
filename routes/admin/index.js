const express = require("express");
const route = express.Router();
const verifiedToken = require("../../middlewares/verifyToken");
const upload = require("../../middlewares/multer");

// register
route.post("/register", require("./register"));


// login
route.post("/login", require("./login"));



// add product
route.post(
  "/addProduct",
  verifiedToken,
  upload.array("photo",5),
  require("./addProduct")
);





route.get(
  "/getProducts",
  verifiedToken,
  upload.single("photo"),
  require("./getProducts")
);
// get products



route.put(
  "/updateProduct/:productId",
  verifiedToken,
  require("./updateProduct")
);
// update product




route.delete(
  "/deleteProduct/:productId",
  verifiedToken,
  require("./deleteProduct")
);
// delete product




route.delete("/deleteAccount", verifiedToken, require("./deleteAccount"));
// delete account

module.exports = route;
