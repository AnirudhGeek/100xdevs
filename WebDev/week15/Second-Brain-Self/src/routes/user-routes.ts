import express from "express"
const router = express.Router()
import {deleteContent, getContent, postContent, userSignIn, userSignup} from "../controllers/user-controllers.js"
import { userAuthMiddleware } from "../middlewares/user-auth-middleware.js"

//routes
router.post("/signup",userSignup)
router.post("/signin",userSignIn)
router.post("/content",userAuthMiddleware,postContent)
router.get("/content",userAuthMiddleware,getContent)
router.delete("/content",userAuthMiddleware,deleteContent)

export default router