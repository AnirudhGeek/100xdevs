"use client";
import { useState } from "react";

export default function Singin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1 className="text-4xl flex flex-col items-center py-10 font-bold text-blue-500">
        Signin Page
      </h1>
      <div className="flex flex-col gap-5 items-center">
        <label htmlFor="">
          Username :
          <input
            className="bg-white ml-2 text-black rounded-lg outline-0 text-lg px-2 py-1 w-fit"
            type="text"
            placeholder="enter your username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label htmlFor="">
          Password :
          <input
            className="bg-white ml-2 text-black rounded-lg outline-0 text-lg px-2 py-1 w-fit"
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button className="text-lg px-2 py-1 bg-blue-400 text-white rounded-md hover:cursor-pointer font-semibold hover:bg-blue-500 transform transition-all ease-out">
          Signin
        </button>
      </div>
    </div>
  );
}
