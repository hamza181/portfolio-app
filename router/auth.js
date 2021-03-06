const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// require("../db/conn");
const User = require("../model/userSchema");
const Authenticate = require("../middleware/authenticate");

// comment it becase when deploy on heroku "/" will take as frontend
// router.get("/", (req, res) => {
//   res.cookie("name", "value");
//   res.send("Hello World! router.js");
// });

// with async await

router.post("/register", async (req, res) => {
  const { name, email, password, cpassword, phone, work } = req.body;

  if (!name || !email || !password || !cpassword || !phone || !work) {
    return res.status(422).json({
      status: "error",
      message: "Please fill all the fields",
    });
  }

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(422).json({ message: "User already exist" });
    } else if (password !== cpassword) {
      return res
        .status(422)
        .json({ message: "password and cpassword are not matching" });
    } else {
      const user = new User({ name, email, password, cpassword, phone, work });

      const userRegister = await user.save();

      if (userRegister) {
        return res.status(200).json({
          status: "success",
          message: "User registered successfully",
          data: userRegister,
        });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
});

// with promises

// router.post("/register", (req, res) => {
//   const { name, email, password, cpassword, phone, work } = req.body;
//   if (!name || !email || !password || !cpassword || !phone || !work) {
//     return res.status(422).json({
//       status: "error",
//       message: "Please fill all the fields",
//     });
//   }

//   User.findOne({ email }).then((userExist) => {
//     if (userExist) {
//       return res.status(422).json({
//         status: "error",
//         message: "User already exist",
//       });
//     }
//     const user = new User({ name, email, password, cpassword, phone, work });
//     user
//       .save()
//       .then((user) => {
//         res
//           .status(201)
//           .json({
//             status: "user registered successfully",
//             data: user,
//           })
//           .catch((err) => {
//             res.status(500).json({
//               status: "error",
//               message: err.message,
//             });
//           });
//       })
//       .catch((err) => {
//         res.status(500).json({
//           status: "error",
//           message: err.message,
//         });
//       });
//   });
// });

// login route
router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(422).json({
        status: "error",
        message: "Please fill all the fields",
      });
    }

    const userLogin = await User.findOne({ email });

    // let isMatch;
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      // for jwt token
      token = await userLogin.generateAuthToken();
      // res.cookie('token', 'token');

      res.cookie("namee", "valuee");

      // res.cookie("jwtoken", token, {
      //   // 3600000 is milli seconds
      //   expires: new Date(Date.now() + 3600000),
      //   // maxAge: 3600000,
      //   httpOnly: true,
      // });
      // for jwt token

      if (!isMatch) {
        res.status(422).json({
          status: "error",
          message: "Invalid credentioals",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "User logged in successfully",
          data: userLogin,
        });
      }
    } else {
      res.status(422).json({
        status: "error",
        message: "Invalid credentioals",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/about", Authenticate, (req, res) => {
  res.json({
    user: req.user,
  });
});

router.get("/getdata", Authenticate, (req, res) => {
  res.json({
    user: req.user,
  });
});

router.post("/contact", Authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res.status(422).json({
        status: "error",
        message: "Please fill all the fields",
      });
    }
    const userContact = await User.findOne({ _id: req.userId });
    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );
      await userContact.save();

      res.status(201).json({
        status: "success",
        message: "Message sent successfully",
        data: userMessage,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/logout", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "User logged out successfully",
  });
});

module.exports = router;
