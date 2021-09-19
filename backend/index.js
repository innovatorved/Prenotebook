const connectToMongo = require("./mongoDb"); // Import mongoDb.js filee
const express = require('express'); // Import Express Module

// Lets Connect to MongoDb cluster
connectToMongo();

// Create express App and set PORT 
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Available Routes
app.use("/api/auth" , require("./routes/auth"));  // Route auth.js
app.use("/api/notes" , require("./routes/notes"));  // Route notes.js


// Listen app to port
app.listen(port, () => {
  console.log(`Example app listening at https://${port}-kumquat-wolf-t4uqc0ae.ws-us15.gitpod.io/`);
});