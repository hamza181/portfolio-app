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

const User = require("../model/userSchema");
//  Middleware
const middleware = (req, res, next) => {
  console.log("hello middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", middleware, (req, res) => {
  res.send("Hello about!");
});
app.get("/contact", (req, res) => {
  res.send("Hello contafct!");
});
app.get("/signin", (req, res) => {
  res.send("Hello signin!");
});
app.get("/signup", (req, res) => {
  res.send("Hello signup!");
});

app.listen(PORT, () => {
  console.log("Example app listening on port 5000!");
});
