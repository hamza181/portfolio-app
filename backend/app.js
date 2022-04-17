const express = require("express");
const app = express();

//  Middleware

const middleware = (req, res, next) => {
    console.log('hello middleware');
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
