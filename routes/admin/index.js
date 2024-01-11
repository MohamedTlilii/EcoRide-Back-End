const express = require("express");
const route = express.Router();
const verifiedToken = require("../../middlewares/verifyToken");

route.post("/register", require("./register"));
route.post("/login", require("./login"));
route.post("/addProduct", verifiedToken, require("./addProduct"));

module.exports = route;
