const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World! router.js");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.json({
    message: "success",
    body: req.body,
  });
});

module.exports = router;
