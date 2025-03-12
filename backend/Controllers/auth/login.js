const jwt = require("jsonwebtoken");
require("dotenv").config();

const UserSignup = require("../../Models/UserSchema/userSignup.js"); //DB schema

async function userLogin(req, res) {
  const body = req.body;
  const { email, password } = body;

  //field validation
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Required Fields Are Missing, Please Enter All" });
  }

  try {
    //find by email
    const searchedUser = await UserSignup.findOne({
      userEmail: email,
    });

    if (!searchedUser) {
      return res
        .status(404)
        .json({ message: "Email not found. Please sign up first." });
    }

    //match the entered password

    if (searchedUser.userPassword !== password) {
      return res
        .status(401)
        .json({ message: "Incorrect password. Please try again." });
    }

    console.log("Searched user found in the DB", searchedUser);

    //assigns jwt  now

    //1- create user object
    const user = { email, password };

    //2-generate jwt

    const jwt_token = jwt.sign(user, process.env.JWT_ACCESS_TOKEN);

    console.log("jwt token", jwt_token);

    //3-send jwt to frontend
    return res.status(200).json({
      message: "User Logged In Successfully.",
      userName: searchedUser.userName,
      userEmail: searchedUser.userEmail,
      userPhoneNumber: searchedUser.userPhoneNumber,
      token: jwt_token,
    });

    console.log("login", body);
  } catch (err) {
    console.error("Error in logging the user in:", err.message);
    return res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
}

module.exports = userLogin;
