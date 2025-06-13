const  jwt  = require('jsonwebtoken')
const {JWT_ADMIN_PASSWORD} = require('../config')

function adminMiddleware(req,res,next){
    const token = req.headers.token
    const decodedToken = jwt.verify(token,JWT_ADMIN_PASSWORD)
    if(decodedToken){
        req.adminId = decodedToken.id
        next()
    }else{
        res.status(407).json({
            msg : "Invalid token"
        })
    }
}

module.exports = {
    adminMiddleware : adminMiddleware
}