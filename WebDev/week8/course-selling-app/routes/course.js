const { Router } = require("express");
const courseRouter = Router();
const {userMiddleware} = require("../middlewares/user");
const { CourseModel, PurchaseModel } = require("../db");
courseRouter.post("/purchase",userMiddleware,async (req, res) => {
  const userId = req.userId
  const courseId = req.body.courseId
  const courses = await PurchaseModel.create({
    userId,
    courseId
  })
  res.json({
    msg: "Purchased courses",
    courses
  });
});

courseRouter.get("/preview",async (req, res) => {
  const courses = await CourseModel.find({})
  res.json({
    msg: "All courses",
    courses
  });
});

module.exports = {
  courseRouter: courseRouter,
};