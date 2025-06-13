const  jwt  = require('jsonwebtoken')
const {JWT_USER_PASSWORD} = require('../config')

function userMiddleware(req,res,next){
    const token = req.headers.token
    const decodedToken = jwt.verify(token,JWT_USER_PASSWORD)
    if(decodedToken){
        req.userId = decodedToken.id
        next()
    }else{
        res.status(407).json({
            msg : "Invalid token"
        })
    }
}