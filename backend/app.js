const mongoose = require("mongoose");
const express = require("express");
const app = express();

//  Connect to MongoDB

const DB =
  "mongodb+srv://hamza:FeePvnRDWgaK19hf@cluster0.qokpz.mongodb.net/portfolio?retryWrites=true&w=majority";

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

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});
