//user sign up schema details here
const mongoose = require("mongoose");

const userSignupSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, "Please use a valid email address"], //email validation
    },
    userPhoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    userPassword: {
      type: String,
      required: true,
    },
    userCity: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UserSignup = mongoose.model("signup", userSignupSchema);

module.exports = UserSignup;
