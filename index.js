// const express = require("express");
// const app = express();
// const cors = require("cors");
// const helmet = require("helmet");
// const mongoose = require("mongoose");
// require("dotenv").config();

// app.use(helmet());
// app.use(cors());
// app.use(express.json());

// // ✅ Connect to MongoDB
// mongoose.connect(process.env.MONGO_URL||"mongodb://127.0.0.1:27017/login")
//   .then(() => {
//     console.log("✅ DB connected");
//     console.log("Connected to DB:", mongoose.connection.name);
//   })
//   .catch(err => console.log("❌ DB connection error:", err));

// // ✅ Define user model
// const userdetails = mongoose.model("logindetails", {
//   useremail: String,
//   password: String,
// }, "logindetails");

// // ✅ Home route
// app.get("/", (req, res) => {
//   res.send("✅ Server is running!");
// });

// // ✅ Login route
// app.post("/login", (req, res) => {
//   console.log("🔵 Received /login POST request");
//   console.log("Request body:", req.body);

//   const email = req.body.useremail?.trim().toLowerCase();
//   const password = req.body.password;

//   if (!email || !password) {
//     console.log("❌ Missing email or password");
//     return res.send({ success: false, message: "Missing credentials" });
//   }

//   userdetails.findOne({ useremail: email })
//     .then((user) => {
//       console.log("🔎 Query result:", user);

//       if (!user) {
//         console.log("❌ No user found with that email");
//         return res.send({ success: false, message: "User not found" });
//       }

//       if (user.password === password) {
//         console.log("✅ Password matched");
//         return res.send({ success: true });
//       } else {
//         console.log("❌ Incorrect password");
//         return res.send({ success: false, message: "Incorrect password" });
//       }
//     })
//     .catch(err => {
//       console.log("❌ Error in query:", err);
//       res.send({ success: false, message: "Server error" });
//     });
// });

// // ✅ Start server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server started on port ${PORT}...`);
// });


const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
  res.send("✅ server started")
})

const email = "welcome@gmail.com"
const pass = "welcome007"

app.post("/login",(req,res)=>{
  const {useremail,password} = req.body
  console.log(req.body)

  if(email === useremail && pass === password){
    res.send(true)
  }
  else{
    res.send(false)
  } 

})

app.listen(3000,()=>{
  console.log("server started on 3000...")
})


