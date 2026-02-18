import type { Request, Response } from "express";
import { UserModel } from "../models/user-model.js";
import { compare, genSalt, hash } from "bcrypt";
import jwt from "jsonwebtoken";

export const userSignup = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    //checking user already exist
    const userExist = await UserModel.findOne({ username });

    if (userExist) {
      return res.status(400).json({
        success: false,
        msg: "User already exist",
      });
    }

    //hashing the password
    const salt = await genSalt(10);
    const hashedPass = await hash(password, salt);

    const createUser = await UserModel.create({
      username,
      password: hashedPass,
    });

    if (createUser) {
      return res.status(200).json({
        success: true,
        msg: "Created user successfully!",
      });
    } else {
      return res.status(403).json({
        success: false,
        msg: "User already exists!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(411).json({
      success: false,
      msg: "Cannot create user!",
    });
  }
};

export const userSignIn = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const userExist = await UserModel.findOne({
    username,
  });

  if (!userExist) {
    return res.status(404).json({
      success: false,
      msg: "User doesn't exist!",
    });
  } else {
    //verify password
    if (typeof userExist.password === "string") {
      const verifiedPass = await compare(password, userExist.password);
      
      if(!verifiedPass){
        return res.status(400).json({
            success : false,
            msg : "Invalid Credentials!"
        })
      }

      //generate token
      if(typeof process.env.JWT_SECRET === "string"){
          const token = jwt.sign({
            id : userExist._id
          },process.env.JWT_SECRET,{expiresIn : "30m"})

          return res.status(200).json({
            success : true,
            msg : "Logged in successfully!",
            token
          })

      }
    }
  }
};

export const postContent = async (req: Request, res: Response) => {
  const {title , link , tags } = req.body
  //@ts-ignore
  const userID = req.userId.id
  console.log(userID)

};

export const getContent = async (req: Request, res: Response) => {};

export const deleteContent = async (req: Request, res: Response) => {};
