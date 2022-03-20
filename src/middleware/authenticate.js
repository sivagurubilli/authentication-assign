require("dotenv").config()
const jwt = require("jsonwebtoken")

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