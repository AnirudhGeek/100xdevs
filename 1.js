// //checking the age without using middlewares
// const express = require("express");
// const app = express();

// const PORT = 3000;

// function isOldEnough(age) {
//   if (age >= 14) return true;
//   else return false;
// }

// app.get("/", (req, res) => {
//   if (isOldEnough(req.query.age)) {
//     res.status(200).json({
//       msg: "You have successfully ridden ride 1",
//     });
//   } else {
//     res.status(411).json({
//       msg: "Your are underage",
//     });
//   }
// });

// app.get("/ride2", (req, res) => {
//   if (isOldEnough(req.query.age)) {
//     res.status(200).json({
//       msg: "You have successfully ridden ride 2",
//     });
//   } else {
//     res.status(411).json({
//       msg: "Your are underage",
//     });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port : ${PORT}`);
// });


//creatting our middleware for ride in ammusement 
const express = require('express')
const app = express()

const PORT = 3000

//middleware
function askAge(req,res,next){
    if(req.query.age>14){
        next()
    }else{
        res.json({
            msg : "You are not allowed"
        })
    }
}

//ride1
app.get('/',askAge,function(req,res){
    res.json({
        msg : "Yes you are allowed in ride 1"
    })
})

//ride2
app.get('/',askAge,function(req,res){
    res.json({
        msg : "Yes you are allowed in ride 2"
    })
})


app.listen(PORT,()=>{
    console.log(`Server started at port : ${PORT}`)
})