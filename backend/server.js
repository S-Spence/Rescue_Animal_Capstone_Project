const express = require("express");
const cors = require("cors");
// Provide the path to the config environment
require("dotenv").config({ path: "./config.env" });

// Initialize express
const app = express();
// Define port
const port = process.env.PORT || 5000;
// Use cors and express
app.use(cors());
app.use(express.json());
app.use(require("./routes/animal"));

// Get the driver connection
const db = require("./database/connection");

app.listen(port, () => {
  // perform a database connection when server starts
  db.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
