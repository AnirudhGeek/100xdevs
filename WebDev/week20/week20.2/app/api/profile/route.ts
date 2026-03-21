import { NextRequest, NextResponse } from "next/server";




export function GET(req:NextRequest){
    //verify the user logic 




    return NextResponse.json({
        avatarURL : "https://image.png"
    })
}