import dotenv from "dotenv";
dotenv.config();
import { Client } from "pg";
import express from "express";

const app = express();

app.use(express.json());

const pgClient = new Client(process.env.POSTGRES_URI);

pgClient.connect();

async function main() {
  const createTable = await pgClient.query(
    "CREATE TABLE newUser( id SERIAL PRIMARY KEY , username VARCHAR(250) NOT NULL UNIQUE, email VARCHAR(250) NOT NULL UNIQUE,password VARCHAR(250) NOT NULL , createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP)",
  );
}
main();

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  try {
    const insertQuery = `INSERT INTO newUser(username , email , password) VALUES($1,$2,$3)`;
    const response = await pgClient.query(insertQuery, [
      username,
      email,
      password,
    ]);

    res.status(201).json({
      success: true,
      message: "User signed up successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      success: false,
      message: "Unable to add user",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on the port 3000");
});
