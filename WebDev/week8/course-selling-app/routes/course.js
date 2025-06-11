const { Router } = require("express");
const courseRouter = Router();
courseRouter.post("/purchase", (req, res) => {
  res.json({
    msg: "Purchased courses",
  });
});

courseRouter.get("/preview", (req, res) => {
  res.json({
    msg: "All courses",
  });
});

module.exports = {
  courseRouter: courseRouter,
};