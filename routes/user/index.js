const express = require("express");
const route = express.Router();
const verifiedToken = require("../../middlewares/verifyToken");
const upload = require("../../middlewares/multer");

route.post("/register", require("./register"));
route.post("/login", require("./login"));
// update user photo
route.put(
  "/updatePhoto",
  verifiedToken,
  upload.single("photo"), 
  require("./updatePhoto")
);
module.exports = route;
