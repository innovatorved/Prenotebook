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

app.listen(port, () => {
  console.log(`Example app listening at https://${port}-kumquat-wolf-t4uqc0ae.ws-us15.gitpod.io/`);
});