const express = require("express")

const connect = require("./configs/db")

const app = express()

app.use(express.json())


app.listen(5000,async(req,res)=>{
try{
    await connect()
    console.log("listening on port 5000")

}catch(err){
    console.log(err.message)
}
})