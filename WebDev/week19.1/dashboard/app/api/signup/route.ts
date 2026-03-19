import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  const { username, password } = await req.json();


  try {
      const user = await prisma.user.create({
    data: {
      username,
      password,
    },
  });

  if (user) {
    return NextResponse.json({
      username,
      msg: "User signed-up successfull!",
    });
  }


  } catch (error) {
    console.log(error)
    return NextResponse.json({
        msg : "User already exist!"
    })
  }


}
