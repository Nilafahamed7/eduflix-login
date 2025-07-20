const express = require("express")
const app = express()
const cors = require("cors")
const helmet = require("helmet")
app.use(helmet())
app.use(cors())

app.use(express.json())

var useremail = "abc@gmail.com"
var pass = "abc123"


app.get("/",function(req,res){
    res.send("✅ Server is running!")
})

app.post("/login",function(req,res){
    console.log(req.query.email)
    if(useremail == req.query.email && pass == req.query.password){
        res.send(true)
    }
    else{
        res.send(false)
    }
})

const PORT = process.env.PORT || 3000

app.listen(PORT,function(){
    console.log(`server started on port ${PORT}...`)
}) 