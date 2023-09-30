const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// listen on port 5000 and run a callback function
app.listen(5000, () => {
  console.log("server has started on port 5000");
});
