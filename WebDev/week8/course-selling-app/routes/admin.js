const { Router } = require("express");
const {z} = require('zod')
const bcrypt = require('bcrypt');
const { AdminModel } = require("../db");

const adminRouter = Router();

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


adminRouter.post("/signin", (req, res) => {
  res.json({
    msg: "Sign in",
  });
});

adminRouter.post("/", (req, res) => {
  res.json({
    msg: "Signed up",
  });
});

adminRouter.put("/", (req, res) => {
  res.json({
    msg: "Signed up",
  });
});

adminRouter.get("/course/bulk", (req, res) => {
  res.json({
    msg: "Signed up",
  });
});

module.exports = {
    adminRouter : adminRouter
}