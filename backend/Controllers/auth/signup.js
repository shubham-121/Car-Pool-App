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

    // 3-send response to frontend
    return res.status(200).json({
      message: "Successfully created the  user in the DB",
      user: newUser,
    });
  } catch (err) {
    console.error("Error in creating the user", err.message);
    throw new Error();
  }
}

module.exports = userSignup;
