import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { Client } from "pg";
const app = express();

const pgClient = new Client(process.env.POSTGRES_URI);
pgClient.connect();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const city = req.body.city;
  const country = req.body.country;
  const street = req.body.street;
  const pincode = req.body.pincode;

  try {
    //inserting into users database
    const insertQueryUsers =
      "INSERT INTO users(username,email,password) VALUES($1,$2,$3) RETURNING id";

    //insert into address database
    const insertQueryAddress =
      "INSERT INTO address(city,country,street,pincode,user_id) VALUES($1,$2,$3,$4,$5)";

    //TRANSACTION
    await pgClient.query("BEGIN;");
    const responseUsers = await pgClient.query(insertQueryUsers, [
      username,
      email,
      password,
    ]);

    // console.log(responseUsers)
    const userID = responseUsers.rows[0].id;

    // //crashing the backend with timeout to see functionality of TRANSACTIONS
    // await new Promise((x) =>
    //   setTimeout((x) => {
    //     x;
    //   }, 100 * 1000),
    // );

    const responseAddress = await pgClient.query(insertQueryAddress, [
      city,
      country,
      street,
      pincode,
      userID,
    ]);

    await pgClient.query("COMMIT;");

    res.status(201).json({
      success: true,
      msg: "user signed up successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      msg: "cannot signup the user",
    });
  }
});

//bad-approach for joints
app.get("/metadata", async (req, res) => {
  const id = req.query.id;

  const query1 = "SELECT username, email,id FROM users WHERE id=$1";
  const response1 = await pgClient.query(query1, [id]);
  const query2 =
    "SELECT city,country,street,pincode FROM address WHERE user_id=$1";
  const response2 = await pgClient.query(query2, [id]);

  res.status(200).json({
    user: response1.rows[0],
    address: response2.rows,
  });
});

//better-approach        //NOTE :- but in few cases sending 2 different queries is a better approach when their are too many rows as join for table of (n*n)mapping which is a very expensive operation
app.get("/better-metadata", async (req, res) => {
  const id = req.query.id;

  try {
    const query =
      "SELECT users.id, users.username, users.email, address.city, address.street, address.country, address.pincode FROM users JOIN address ON users.id=address.user_id WHERE users.id=$1";
    const response = await pgClient.query(query, [id]);

    res.status(200).json({
      response: response.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      msg: "cannot get data",
    });
  }
});


//better writing approach
app.get("/better-writing-metadata",async(req,res)=>{
    const id = req.query.id

    try {
        const query = "SELECT u.username , u.id , u.email, a.city, a.country,a.pincode, a.street FROM users u JOIN address a ON u.id=a.user_id WHERE u.id=$1"
        const response = await pgClient.query(query,[id])
        res.status(200).json({
            response : response.rows
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success : false,
            msg : "cannot get the address"
        })
    }
})

app.listen(3000, () => {
  console.log("Server is runnning on the port 3000");
});
