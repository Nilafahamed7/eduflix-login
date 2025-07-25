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



app.get("/", function (req, res) {
  res.send("✅ Server is running!");
});

app.post("/login", function (req, res) {
  console.log("received email",req.body.useremail)
  console.log("received password",req.body.password)
  console.log(req)

  userdetails.find({ useremail: req.body.useremail })
  .then((user) => {
    console.log("user found:",user)

    if(!user){
        console.log("no user found with that email")
        return res.send(false)
    }
    if ( user.password === req.body.password) {
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
