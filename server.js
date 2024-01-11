const express = require("express");
const mongoose = require("mongoose");
const app = express();

const path = require("path");

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
app.use(express.json());
//ihez data mel clinet ya3mlelha pass o isobha fel body
app.use("/api/user", require("./routes/user"));
app.use("/api/admin", require("./routes/admin"));

// routes
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`server is up and runing on port :${PORT}`);
});
