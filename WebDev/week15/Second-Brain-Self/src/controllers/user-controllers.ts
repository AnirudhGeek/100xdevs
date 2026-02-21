import type { Request, Response } from "express";
import { UserModel } from "../models/user-model.js";
import { compare, genSalt, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import { ContentModel } from "../models/content-model.js";
import { LinkModel } from "../models/link-model.js";
import { random } from "../utils.js";

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

      if (!verifiedPass) {
        return res.status(400).json({
          success: false,
          msg: "Invalid Credentials!",
        });
      }

      //generate token
      if (typeof process.env.JWT_SECRET === "string") {
        const token = jwt.sign(
          {
            id: userExist._id,
          },
          process.env.JWT_SECRET,
          { expiresIn: "30m" },
        );

        return res.status(200).json({
          success: true,
          msg: "Logged in successfully!",
          token,
        });
      }
    }
  }
};

export const postContent = async (req: Request, res: Response) => {
  try {
    const { title, link, tags } = req.body;
    const userId = req.userId;
    console.log(userId);

    if (!userId) {
      return res.status(400).json({
        success: false,
        msg: "Cannot post the content!",
      });
    } else {
      await ContentModel.create({ title, link, tags, userID: userId });
      res.status(201).json({
        success: true,
        msg: "Content Posted!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      msg: "Cannot post content!",
    });
  }
};

export const getContent = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    // console.log(userId)
    if (userId) {
      const content = await ContentModel.find({ userID: userId }).populate(
        "userID",
        "username",
      );
      // console.log(content)
      if (content.length === 0) {
        return res.status(200).json({
          success: true,
          msg: "No data found! Add some content",
        });
      }
      res.status(200).json({
        success: true,
        content,
      });
    } else {
      return res.status(404).json({
        success: false,
        msg: "userId not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      msg: "Cannot get the content",
    });
  }
};

export const deleteContent = async (req: Request, res: Response) => {
  try {
    const { contentId } = req.body;
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        msg: "Unauthorized",
      });
    }

    const deletedContent = await ContentModel.findOneAndDelete({
      _id: contentId,
      userID: userId,
    });

    if (!deletedContent) {
      return res.status(404).json({
        success: false,
        msg: "Content not found or not yours",
      });
    }

    return res.status(200).json({
      success: true,
      msg: "Successfully deleted!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Cannot delete content!",
    });
  }
};

export const shareContent = async (req: Request, res: Response) => {
  const { share } = req.body;
  const userId = req.userId;

  if (share) {
    const alreadyExist = await LinkModel.findOne({
      userId: userId,
    });

    if (alreadyExist) {
      return res.status(200).json({
        hash: alreadyExist.hash,
      });
    }

    let hash = random(10);
    await LinkModel.create({
      userId: userId,
      hash: hash,
    });

    return res.status(201).json({
      success: true,
      msg: "/api/v1/share/" + hash,
    });
  } else {
    await LinkModel.deleteOne({
      userId: userId,
    });

    return res.status(200).json({
      success: true,
      msg: "Removed Link successfully!",
    });
  }
};


export const shareable = async(req:Request , res: Response)=>{
  const shareableLink = req.params.shareable
  if(shareableLink){
    const details = await LinkModel.findOne({
      hash : shareableLink
    }).populate("userId","_id")

    if(!details){
      return res.status(404).json({
        success : false,
        msg : "No Data found!"
      })
    }

    const userId = ((details?.userId as any)._id).toString()
    
    const getContentFromID = await ContentModel.find({
      userID : userId
    })

    if(!getContentFromID){
      return res.status(404).json({
        success : false,
        msg : "Cannot find content"
      })
    }



    res.json({
      Content : getContentFromID
    })
  }
}