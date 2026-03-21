import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    //assuming we are getting the right credentials
    const userId = 1;
    const token = jwt.sign(
      {
        username,
        password,
      },
      "SECRET",
    );

    
    return NextResponse.json({
      token,
    });
  } catch (error) {
    console.log(error);
  }
}
