const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("Hello about!");
});
app.get("/contact", (req, res) => {
  res.send("Hello contafct!");
});

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});
