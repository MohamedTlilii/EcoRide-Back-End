const express = require("express");
const route = express.Router();

route.post("/register", require("./register") );
route.post("/login", require("./login") );



module.exports = route;