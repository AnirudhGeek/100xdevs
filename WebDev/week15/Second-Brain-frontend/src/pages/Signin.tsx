import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const signinUser = async()=>{
    const username = usernameRef.current?.value
    const password = passwordRef.current?.value

    const response = await axios.post(BACKEND_URL + "/api/v1/signin",{
        username,
        password
    })

    if(!response){
        throw new Error("Cannot get response")
    }

    const jwt = response.data.token
    localStorage.setItem("token",jwt)
    navigate("/dashboard")
    alert("Signin successfull")
  }

  return (
    <div className="min-w-screen min-h-screen bg-gray-300 flex justify-center items-center">
      <div className="bg-white  p-8 flex flex-col gap-5 rounded-lg     ">
        <div className="flex flex-col gap-5 rounded-lg mb-4">
          <Input ref={usernameRef} placeholder="Username" />
          <Input ref={passwordRef} placeholder="Password" />
        </div>
        <Button onClick={signinUser} loading={false} size="lg" variant="secondary" text="Signin" />
      </div>
    </div>
  );
};
