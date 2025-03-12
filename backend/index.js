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

//custom middlewares
const verifyToken = require("./Controllers/auth/verifyJwt.js");
const verifyAccessToken = require("./Controllers/auth/verifyJwt.js");

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

app.post("/api/auth/signup", userSignup); //signup route

app.post("/api/auth/login", userLogin); //login route

//2- user routes
app.get("/api/user/profile", verifyAccessToken, (req, res) => {
  return res.status(200).json({
    message: "User profile route verified",
  });
});

//start the server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Backend is running on port:${PORT}`));

//design authentication today ->done
//tomorrow-> notification on login/signup,  jwt authentication
