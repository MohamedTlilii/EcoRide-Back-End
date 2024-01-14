const express = require("express");
const route = express.Router();
const verifiedToken = require("../../middlewares/verifyToken");
const upload = require("../../middlewares/multer");

route.post("/register", require("./register"));
// register


route.post("/login", require("./login"));
// login



route.post(
  "/addProduct",
  verifiedToken,
  upload.array("photo",5),
  require("./addProduct")
);
// add product





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
