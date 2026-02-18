import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function userAuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers["authorization"];
  // console.log(authHeader)

  const token = authHeader?.split(" ")[1];

  // console.log(token)

  try {
    //verify token
    if (
      typeof process.env.JWT_SECRET === "string" &&
      typeof token === "string"
    ) {
      const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(verifiedUser)
      if(!verifiedUser){
        return res.status(400).json({
            success : false,
            msg : "Invalid Token!"
        })
      }

      req.userId = verifiedUser
      next()
      
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      msg: "Invalid credentials",
    });
  }
}
