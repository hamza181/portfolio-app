const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters"],
    maxlength: [30, "Name must be less than 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
    maxlength: [30, "Password must be less than 30 characters"],
  },
  cpassword: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
    maxlength: [30, "Password must be less than 30 characters"],
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
});

// for password hashing
userSchema.pre("save", async function (next) {
  console.log('hash');
  if (this.isModified("password")) {
    console.log('modified')
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = bcrypt.hashSync(this.cpassword, 12);
    // use async await function or use hashasync
  }
  next();
});

const User = mongoose.model("USER", userSchema);

module.exports = User;
