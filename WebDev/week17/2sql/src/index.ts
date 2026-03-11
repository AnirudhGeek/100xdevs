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

app.listen(3000, () => {
  console.log("Server is runnning on the port 3000");
});
