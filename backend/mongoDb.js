// Import Mooongose : a mongodb to js Connector
const mongoose = require("mongoose");

// connection string
require("dotenv").config();
const mongoURI = process.env.MONGO_API;

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });
};

// Export "connectToMongo" function
module.exports = connectToMongo;
