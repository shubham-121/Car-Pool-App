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
    //search in DB
    const searchedUser = await UserSignup.findOne({
      userEmail: email,
      userPassword: password,
    });

    if (!searchedUser) {
      return res
        .status(400)
        .json({ message: "Cannot Find The User In The Db. SignUp First" });
    }

    console.log("Searched user found in the DB", searchedUser);

    //assigns jwt

    return res.status(200).json({
      message: "User Found Successfully In The DB",
      userName: searchedUser.userName,
      userEmail: searchedUser.userEmail,
      userPhoneNumber: searchedUser.userPhoneNumber,
    });

    console.log("login", body);
  } catch (err) {
    console.error("Error in logging the user in", err.message);
    throw new Error();
  }
}

module.exports = userLogin;
