const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const DB = process.env.DATABASE;

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(DB);
    console.log("DB connection successful!");
  } catch (error) {
    console.log("Error connecting to DB:", error);
  }
};

module.exports = dbConnect;
