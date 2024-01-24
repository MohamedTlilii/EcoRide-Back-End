const express = require("express");
const mongoose = require("mongoose");
const app = express();
// accept request from another server
// https://expressjs.com/en/resources/middleware/cors.html
const cors = require("cors");
const path = require("path");
// import lel path mta3 el upload file

require("dotenv").config();

// environmentals varibales
const DBURI = process.env.DBURI;
const PORT = process.env.PORT || 5000;

// function
mongoose
  .connect(DBURI)
  .then(() => {
    console.log("database connected ✅");
  })
  .catch((err) => {
    console.log(err);
    console.log("can't coonect to database ❌");
  });
// middlewares
//ihez data mel clinet ya3mlelha pass o isobha fel body
app.use(express.json());
app.use(cors());

// api routes
app.use("/api/user", require("./routes/user"));
// user routes
app.use("/api/admin", require("./routes/admin"));
// admin routes
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// path fille uplod bech isob fih

// listen to requests
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`server is up and runing on port :${PORT}`);

});