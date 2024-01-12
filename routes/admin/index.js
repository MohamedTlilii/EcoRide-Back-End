const express = require("express");
const route = express.Router();
const verifiedToken = require("../../middlewares/verifyToken");
const upload = require("../../middlewares/multer");

route.post("/register", require("./register"));
route.post("/login", require("./login"));
route.post(
  "/addProduct",
  verifiedToken,
  upload.single("photo"),
  require("./addProduct")
);
route.get("/getProducts", verifiedToken, require("./getProducts"));
route.put(
  "/updateProduct/:productId",
  verifiedToken,
  require("./updateProduct")
);
route.delete(
  "/deleteProduct/:productId",
  verifiedToken,
  require("./deleteProduct")
);

module.exports = route;
