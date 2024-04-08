const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("user info");
});
router.get("/new", (req, res) => {
  res.send("new user form");
});
router.post("/", (req, res) => {
  res.send("create user");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user); // accessing req.user instead of res.user
    res.send(`Get user with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with id ${req.params.id}`);
  });

const users = [{ name: "sravan" }, { name: "kumar" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});
module.exports = router;
