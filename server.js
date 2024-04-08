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
// const express = require("express");
// const app = express();

// app.use((req, res, next) => {
//   console.log(`${req.methods} request recevied for ${req.url}`);
//   next();
// });

// // Route handling logic
// // ...

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Here");

  //   res.status(500).send("Hit");
  //   res.status(500).json({ message: "err " });
  //   res.download("server.js");
  res.render("index", { text: "world" });
});

const userRouter = require("./routes/users");
app.use("/users", userRouter);
app.listen(3000);
