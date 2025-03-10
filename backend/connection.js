const mongoose = require("mongoose");
require("dotenv").config();

async function connectToDB() {
  const connectionSTring = process.env.DB_CONNECTION_STRING;
  //   console.log("Connection string to DB", connectionSTring);

  try {
    const conn = await mongoose.connect(`${connectionSTring}`);
    if (!conn) {
      console.log("Error in connecting to the DB");
      return;
    }

    console.log("Successfully connected to the DB");
  } catch (err) {
    console.log("Error in connecting to the DB", err.message);
    throw new Error("Error in connecting to the DB");
  }
}

module.exports = connectToDB;
