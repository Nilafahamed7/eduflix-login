const express = require("express")
const app = express()
const cors = require("cors")
const helmet = require("helmet")
app.use(helmet())
app.use(cors())

app.use(express.json())

var useremail = "abc@gmail.com"
var pass = "abc123"

app.post("/login",function(req,res){
    console.log(req.body.email)
    if(useremail == req.body.email && pass == req.body.password){
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