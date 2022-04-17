const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = express();

//  Connect to MongoDB

dotenv.config({
  path: "./config.env",
});
const DB = process.env.DATABASE;
const PORT = process.env.PORT;

mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed");
  });

//  Connect to MongoDB

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
