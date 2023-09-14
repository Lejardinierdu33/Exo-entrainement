const mongoose = require("mongoose");

const connectDB = async () => {
  const url = "mongodb+srv://" + process.env.HOST + "/" + process.env.DB_NAME;
  try {
    await mongoose.connect(url, {});
    console.log('MongoDB connecté')
  } catch (err) {
    console.log(error);
  }
};

module.exports = connectDB;
