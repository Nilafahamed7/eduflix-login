const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
require("dotenv").config()
app.use(helmet());
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("DB connexted"));

const userdetails = mongoose.model("logindetails", {
  useremail: String,
  password: String,
});

// var useremail = "welcome@gmail.com"
// var pass = "welcome007"

app.get("/", function (req, res) {
  res.send("✅ Server is running!");
});

app.post("/login", function (req, res) {
  console.log(req.body.email);
  userdetails.findOne({ useremail: req.body.email })
  .then((user) => {
    if (user && user.password === req.body.password) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`server started on port ${PORT}...`);
});
