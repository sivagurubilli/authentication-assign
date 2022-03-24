require("dotenv").config()
const jwt = require("jsonwebtoken")

const authenticate = async(req,res,next)=>{
    if(!req.headers.authorization){
        return res.status(401).send("authorisation not found")

    }
    if(!req.headers.authorization.startsWith("Bearer ")){
        return res.status(401).send("authorisation not found")

    }
    const token = req.headers.authorization.trim().split(" ")[1]
    console.log(token)
    let decoded;
    try{
decoded  = await verifyToken(token)
 
    }catch(error){
        return res.send(err.message)
    }
    req.user = decoded.user
    return next()
}












const verifyToken  = (token)=>{
    return newPromise((resolve,reject)=>{
        jwt.verify(token,process.env.secret_key,(err,decoded)=>{
            if(err){
                return reject(err)
            }
            return resolve(decoded)
        })
    })
}