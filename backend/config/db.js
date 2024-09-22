const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true, // Fix for the ensureIndex deprecation
      useFindAndModify: false, // Optional: avoids deprecation warnings for findAndModify
    });

    console.log(
      `MongoDB Connected: ${conn.connection.host} - ${conn.connection.port} - DB: ${conn.connection.name}`.cyan.underline
    );
  } catch (error) {
    console.error(`Connection Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
