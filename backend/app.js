const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");

dotenv.config({
  path: "./config.env",
});
const PORT = process.env.PORT || 5000;

// for connecting to mongoDB
require("./db/conn");

const User = require("./model/userSchema");

app.use(express.json());

app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, DELETE, OPTIONS"
//   );
//   next();
// });

app.use(require("./router/auth"));
//  Middleware
const middleware = (req, res, next) => {
  console.log("hello middleware");
  next();
};

// for deploy on heroku
if(process.env.NODE_ENV === 'production') {
  app.use(express.static("frontend/build"));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}


app.listen(PORT, () => {
  console.log("Example app listening on port 5000!");
});
