//npm packages
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

//user files

//Models (DB files)
const UserSignup = require("./Models/UserSchema/userSignup");
const connectToDB = require("./connection.js");

//controllers (Routes files)
const userSignup = require("./Controllers/auth/signup.js");
const userLogin = require("./Controllers/auth/login.js");

//express instance
const app = express();

//create DB connection
connectToDB();

//middlewares
dotenv.config(); //allows to use env variables

app.use(cors()); //allows cross origin requests

app.use(express.json()); //parse the json data from frontend to backend

app.use(
  cors({
    origin: `${process.env.LOCAL_SERVER_URL}`,
    credentials: true,
  })
);

//user routes

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Index Route" });
});

//1- User Auth routes - signup, login

app.post("/signup", userSignup); //signup route

app.post("/login", userLogin);

// app.post("/login", async (req, res) => {
// const body = req.body;
// const { email, password } = body;
// //field validation
// if (!email || !password) {
//   return res
//     .status(400)
//     .json({ message: "Required Fields Are Missing, Please Enter All" });
// }
// //search in DB
// const searchedUser = await UserSignup.findOne({
//   userEmail: email,
//   userPassword: password,
// });
// if (!searchedUser) {
//   return res
//     .status(400)
//     .json({ message: "Cannot Find The User In The Db. SignUp First" });
// }
// console.log("Searched user found in the DB", searchedUser);
// //assigns jwt
// return res.status(200).json({
//   message: "User Found Successfully In The DB",
//   userName: searchedUser.userName,
//   userEmail: searchedUser.userEmail,
//   userPhoneNumber: searchedUser.userPhoneNumber,
// });
// console.log("login", body);
// });

//start the server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Backend is running on port:${PORT}`));

//design authentication today ->done
//tomorrow-> notification on login/signup,  jwt authentication
