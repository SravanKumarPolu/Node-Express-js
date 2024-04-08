// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   const message = "Welcome to my website!";
//   console.log(message);
//   res.send(message);
// });

// app.post("/submit", (req, res) => {});
// app.listen(3000, () => {
//   console.log("server is running on port 3000");
// });

// middleware
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`${req.methods} request recevied for ${req.url}`);
  next();
});

// Route handling logic
// ...

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
