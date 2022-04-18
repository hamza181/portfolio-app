const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({
  path: "./config.env",
});
const PORT = process.env.PORT;

// for connecting to mongoDB
require("./db/conn");

const User = require("./model/userSchema");

app.use(express.json());

app.use(require("./router/auth"));
//  Middleware
const middleware = (req, res, next) => {
  console.log("hello middleware");
  next();
};

app.listen(PORT, () => {
  console.log("Example app listening on port 5000!");
});
