const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config(); //allows to use env variables

const app = express();

app.use(
  cors({
    origin: `${process.env.LOCAL_SERVER_URL}`,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Index Route" });
});

app.get("/getData", (req, res) => {
  return res.status(200).json({ message: "This is the getData route" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Backend is running on port:${PORT}`));
