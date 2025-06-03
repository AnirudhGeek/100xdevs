const express = require("express");
const app = express();

const PORT = 3000;

const users = []

function generateToken(){
    const options = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];
    let token = ""
    for(let i =0 ;i<32;i++){
        token = token + options[Math.floor(Math.random * options.length)]
    }
    return token
}



app.use(express.json())

app.post("/signup", function (req, res) {

    const username = req.body.username 
    const password = req.body.password

    users.push({
        username : username,
        password : password
    })

    res.json({
        msg : "You are signed in"
    })
    console.log(users)
});

app.post("/signin", function (req, res) {
    const username = req.body.username
    const password = req.body.password

    const user = users.find(u=>u.username === username && u.password === password)

    if(user){
        const token = generateToken()
        user.token = token
        res.json({
            token : token
        })
    }else{
        res.status(400).json({
            msg : "User already exist"
        })
    }
    console.log(users)
});

app.listen(PORT, () => {
  console.log(`Server started at port : ${PORT}`);
});
