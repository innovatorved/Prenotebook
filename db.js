const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_API;

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
