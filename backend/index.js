const connectToMongo = require("./mongoDb"); // Import mongoDb.js filee
const express = require("express"); // Import Express Module
var cors = require("cors"); // ALllow CORS
require("dotenv").config();

// Lets Connect to MongoDb cluster
connectToMongo();

// Create express App and set PORT
const app = express();
const port = process.env.PORT || 3002;

// allow CORS using middleware
app.use(cors());
// for accepting the request body and send json we need a middlewaere
app.use(express.json());

app.get("/", (_, res) => {
  return res.status(200).json({ status: true });
});
// Available Routes
app.use("/api/auth", require("./routes/auth")); // Route auth.js
app.use("/api/notes", require("./routes/notes")); // Route notes.js

// Listen app to port
app.listen(port, () => {
  console.log(`PreNotebook app listening at http://localhost:${port}/`);
});
