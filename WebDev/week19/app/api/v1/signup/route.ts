import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma/client";


const prismaClient = new PrismaClient({
    adapter
})


export async function POST(req:NextRequest){
    // const body= await req.json()
    const {username,password} =await req.json()
    return NextResponse.json({
        username,
        message : "Successfully signed up!"
    })
}