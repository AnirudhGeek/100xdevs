import {PrismaClient} from "./generated/prisma/client"
import type { PrismaClientOptions } from "./generated/prisma/internal/prismaNamespace";



const client = new PrismaClient({log : ["query","error","info","warn"]});

async function createUser() {
  await client.user.create({
    data: {
      username: "anirudh1",
      password: "123456",
      age: 20,
      city: "Raiwala",
    },
  });
}
