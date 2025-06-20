require('dotenv').config()
const express = require("express");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/course");
const admin = require("./routes/admin");
const app = express();
const { UserModel, AdminModel, CourseModel, PurchaseModel } = require("./db");
const mongoose = require("mongoose");

const PORT = 3000;

app.use(express.json())

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
}

main()