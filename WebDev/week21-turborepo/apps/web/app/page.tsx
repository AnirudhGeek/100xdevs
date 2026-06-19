"use client";
import {TextInput} from "@repo/ui/text-input"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div style={{
      height:"100vh",
      width:"100vw",
      background : "black",
      display:"flex",
      justifyContent :"center",
      alignItems : "center"
    }}> 
      <div style={{
        display:"flex",
        justifyContent : "center",
        alignItems:"center",
        flexDirection : "column"
      }}>
        <TextInput placeholder="enter your room" size="big"></TextInput>
        <p onClick={()=>{
          router.push("/chat/123")
        }} style={{
          width :"fit",
          height :"fit",
          background :"blue",
          padding :10,
          borderRadius : 10
        }}>Join now</p>
      </div>
    </div>
  );
}
