const connectToMongo = require("./mongoDb"); // Import mongoDb.js filee
const express = require('express'); // Import Express Module
require('dotenv').config()

// Lets Connect to MongoDb cluster
connectToMongo();

// Create express App and set PORT 
const app = express();
const port = 3002;


app.get('/', (req, res) => {
  res.send('Hello World!');
});

// for accepting the request body and send json we need a middlewaere
app.use(express.json());

// Available Routes
app.use("/api/auth" , require("./routes/auth"));  // Route auth.js
app.use("/api/notes" , require("./routes/notes"));  // Route notes.js


// Listen app to port
app.listen(port, () => {
  console.log(`Example app listening at https:/localhost:${port}/`);
});