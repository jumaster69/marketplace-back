const mongoose = require("mongoose");
require("dotenv").config();

const connectionDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Base de datos conectada ${db.connection.name}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};


module.exports = connectionDB;