"use client"
import axios from "axios"



export default function Signin(){
    return (
        <div>
            <input type="text" value={"anirudh"}/>
            <input type="text" value={"12345"}/>
            <button className="bg-white text-black px-2 py-1 rounded" onClick={async()=>{
                const res = await axios.post("http://localhost:3000/api/signin",{
                    username:"anirudh",
                    password:"12345"
                })
                localStorage.setItem("token",res.data.token)
            }}> Submit</button>
        </div>
    )
}