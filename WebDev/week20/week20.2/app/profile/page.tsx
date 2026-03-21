"use client"

import axios from "axios"





export default function Profile(){
    let image;
    
    axios.get("http://localhost:3000/api/profile",{
        headers : {
            authorization : localStorage.getItem("token")
        }
    }).then((res)=>{
        image = res.data.avatarURL
    })
    return (
        <div>
            {image}
        </div>
    )
}