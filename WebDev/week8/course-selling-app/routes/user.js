const {Router} = require("express")

const userRouter = Router()


  userRouter.post("/user/signup", (req, res) => {
    res.json({
      msg: "Signup endpoint",
    });
  });

  userRouter.post("/user/signup", (req, res) => {
    res.json({
      msg: "Signin endpoint",
    });
  });

  userRouter.get("/user/purchases", (req, res) => {
    res.json({
      msg: "Purchased a course",
    });
  });


module.exports = {
    userRouter : userRouter
}