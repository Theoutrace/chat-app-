const express = require("express");
const userRoutes = require("./routes/login");
const messageRoutes = require("./routes/message");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRoutes);
app.use(messageRoutes);

app.listen(3000, () => {
  console.log("server is running");
});
