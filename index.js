require("dotenv").config();

const connectToMongo = require("./db");
const express = require("express");
const path = require("path");
const morgan = require("morgan");

connectToMongo();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "./frontend/build")));
app.use(morgan("combined"));
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`PreNotebook app listening at https://localhost:${port}/`);
});
