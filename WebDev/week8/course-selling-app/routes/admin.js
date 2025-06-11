const { Router } = require("express");

const adminRouter = Router();

adminRouter.post("/signup", (req, res) => {
  res.json({
    msg: "Signed up",
  });
});

adminRouter.post("/signin", (req, res) => {
  res.json({
    msg: "Sign in",
  });
});

adminRouter.post("/course", (req, res) => {
  res.json({
    msg: "Signed up",
  });
});

adminRouter.put("/course", (req, res) => {
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