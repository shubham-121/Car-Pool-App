const jwt = require("jsonwebtoken");

require("dotenv").config();

async function verifyAccessToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Token Not Valid,Please Login again" });
  }

  jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });

    console.log("JWT verifyied user", user);

    req.user = user;
  });

  console.log("Auth header", token);

  next();

  //   next()
}

module.exports = verifyAccessToken;
