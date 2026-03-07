import {Client} from "pg";

// const pgClient2 = new Client("postgresql://neondb_owner:npg_IwWA8TdQ0kbq@ep-rapid-term-ai7m7m8j-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require")

const pgClient =new Client({
    user : "neondb_owner",
    password : "npg_IwWA8TdQ0kbq",
    port : 5432,
    host : "ep-rapid-term-ai7m7m8j-pooler.c-4.us-east-1.aws.neon.tech",
    database : "neondb",
    ssl :true
})

async function main(){
    await pgClient.connect()
    const response = await pgClient.query("SELECT * FROM users;")
    // console.log(response)
    console.log(response.rows)
}

main()