const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to my website! ");
  console.log("welcome to my website!");
});

app.post("/submit", (req, res) => {});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
