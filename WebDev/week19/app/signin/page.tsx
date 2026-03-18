"use client";
import axios from "axios";
import { useState } from "react";

export default function SignIn() {
    const [username,setUsername] = useState("")
    const [password, setPassword] = useState("")
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-10 text-6xl ">Signin Page</h1>
      <label>
        Username :
        <input
          type="text"
          placeholder="username"
          className="bg-white text-black rounded-md p-2 outline-0 w-fit ml-2 my-3"
          onChange={(e)=>{
            setUsername(e.target.value)
          }}
        />
      </label>
      <label>
        Password :
        <input
          type="password"
          placeholder="password"
          className="bg-white text-black rounded-md p-2 outline-0 w-fit ml-2"
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
        />
      </label>

      <button onClick={()=>{
        axios.post("http://localhost:3000/api/v1/signin",{
            username,
            password
        })
      }} className="mt-6 text-2xl bg-blue-300 text-white px-8 py-1 rounded hover:cursor-pointer hover:bg-blue-400 transform transition-all ease-in-out">Singin</button>
    </div>
  );
}
