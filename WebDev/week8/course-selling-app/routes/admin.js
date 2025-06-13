const { Router } = require("express");
const {z} = require('zod')
const bcrypt = require('bcrypt');
const { AdminModel, CourseModel } = require("../db");
const adminRouter = Router();
const jwt = require('jsonwebtoken')
const {JWT_ADMIN_PASSWORD} = require('../config');
const { adminMiddleware } = require("../middlewares/admin");

adminRouter.post("/signup",async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  const requiredBody = z.object({
    email: z.string().min(6).max(40).email(),
    password: z.string().min(8).max(20),
    firstName: z.string().min(20).max(50),
    lastName: z.string().min(20).max(50),
  });
  const parseWithSuccess = requiredBody.safeParse(req.body);
  if (!parseWithSuccess) {
    res.status(400).json({
      error: parseWithSuccess.error,
    });
    return
  }
  const hashedPassword =await bcrypt.hash(password, 5);
  try {
    await AdminModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });
    res.status(201).json({
      msg: "Signed Up successfully",
    });
  } catch (e) {
    console.log(`Error => ${e}`);
    res.json({
      msg: "Not able to sign up",
    });
  }
});

adminRouter.post("/signin",async (req, res) => {
  const {email,password} = req.body
  const admin =await AdminModel.findOne({
    email : email
  })
  if(!admin){
    res.status(404).json({
      msg : "Admin not found. Please signin"
    })
    return
  }
  const hashedPassword = bcrypt.compare(password,admin.password)
  if(hashedPassword){
    const token = jwt.sign({
      id : admin._id
    },JWT_ADMIN_PASSWORD)

    res.status(200).json({
      token : token
    })

  }else{
    res.status(403).json({
      msg : "Wrong Credentials"
    })
    return
  }
});

adminRouter.post("/course",adminMiddleware, async(req, res) => {
  const createrId = req.adminId
  const {title, description,price,imageUrl} = req.body

  const course = await CourseModel.create({
    title,description,price,imageUrl,createrId
  })

  res.status(201).json({
    msg : "Created a new course",
    courseId : course._id
  })
});

adminRouter.put("/course",adminMiddleware,async (req, res) => {
  const createrId = req.adminId
  const {title,description,imageUrl,price,courseId} = req.body
  const course = await CourseModel.updateOne({
    _id : courseId,
    createrId : createrId
  },{
    title,description,price,imageUrl
  })
  if(course){
    res.status(200).json({
      msg : "Updated course successfully"
    })
  }else{
    res.json(405).json({
      msg : "Not allowed to change specs"
    })
  }
});

adminRouter.get("/course/bulk",adminMiddleware,async (req, res) => {
  const createrId = req.adminId
  const courses = await CourseModel.find({
    createrId : createrId
  })
  if(courses){
    res.status(200).json({
      msg : "Got courses",
      courses
    })
  }else{
    res.status(404).json({
      msg : "No courses found"
    })
  }
});

module.exports = {
    adminRouter : adminRouter
}