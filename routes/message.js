const express = require("express");

const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile("username.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "no chat exists";
    }
    res.send(
      `${data}
    <form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/" method="POST">
        <input name="message" id="message" type="text" placeholder="message">
        <input name="username" type="text" id="username" placeholder="username" hidden>
        <button type="submit">add</button>
    </form>`
    );
  });
});

router.post("/", (req, res, next) => {
  console.log(req.body.message);
  fs.writeFile(
    "username.txt",
    `${req.body.username}:${req.body.message}`,
    { flag: "a" },
    (err) => {
      err ? console.log(err) : res.redirect("/");
    }
  );
});

module.exports = router;
