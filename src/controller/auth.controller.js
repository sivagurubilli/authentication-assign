const user = require("../models/user.model")
const jwt = require("jsonwebtoken");


require("dotenv").config()

const generateToken = (user)=>{
    return jwt.sign({user},process.env(secret_key))

}

const register = async(req,res)=>{
    try{
        let user  =await user.findOne({email:req.body.email})
     if(user){
         return res.status(400).send({message:"email already exists"})

     }
     user = await user.create(req.body)
     const token = generateToken(user)
     return res.status(200).send({user,Token})

    }catch(err){
        res.status(400).send({message:err.mesage})

    }
}


const login = async(req,res)=>{
    try{
        const user = await user.findOne({email:req.body.email})
        if(!user){
            return res.status(400).send("wrong email")

        }
        const match =user.checkPassword(req.body.password)
        if(!match){
            return res.status(400).send({message:"wrong email"})


        }
        const token = generateToken(user)
        return res.status(200).send({user,token})

    }catch(err){
        res.status(400).send({message:err.message})
    }
}


module.exports =  {register,login}