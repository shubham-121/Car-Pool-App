const jwt = require("jsonwebtoken");
require("dotenv").config();

const UserSignup = require("../../Models/UserSchema/userSignup.js"); //DB schema

async function userSignup(req, res) {
  const body = req.body;

  const { name, email, phoneNumber, password, city } = body;

  //1- form data validation
  if (!name || !email || !phoneNumber || !password || !city) {
    return res.status(400).json({
      message: "Complete Form Data Is Missing, Please Enter Full Form Data",
      userData: { name, email, phoneNumber, password, city },
    });
  }

  //check if user exsists already with email or phone number

  const exsistingUser = await UserSignup.findOne({ userEmail: email });
  const exsistingUser2 = await UserSignup.findOne({
    userPhoneNumber: phoneNumber,
  });

  console.log("exsisting user found with same email:", exsistingUser);
  console.log("exsisting user found with same phone:", exsistingUser2);

  if (exsistingUser || exsistingUser2) {
    return res
      .status(400)
      .json(
        exsistingUser
          ? { message: "User Already Exsists, With The Same Email." }
          : { message: "User Already Exsists, With The Same Phone Number." }
      );
  }

  //2- create a new user with the data
  try {
    const newUser = await UserSignup.create({
      userName: name,
      userEmail: email,
      userPhoneNumber: phoneNumber,
      userPassword: password,
      userCity: city,
    });

    if (!newUser) {
      return res
        .status(400)
        .json({ message: "Problem in creating the user", user: newUser });
    }

    console.log("New user created successfully in the DB:", newUser);

    //assign jwt token to new user

    const user = { email, password };

    const jwt_token = jwt.sign(user, process.env.JWT_ACCESS_TOKEN);

    console.log("jwt token from signup route", jwt_token);

    // 3-send response to frontend
    return res.status(200).json({
      message: "Successfully created the  user in the DB",
      userName: name,
      userEmail: email,
      userPhoneNumber: phoneNumber,
      token: jwt_token,
    });
  } catch (err) {
    console.error("Error in creating the user", err.message);
    throw new Error();
  }
}

module.exports = userSignup;
