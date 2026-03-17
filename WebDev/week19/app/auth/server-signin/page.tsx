import axios from "axios";
import { NextResponse } from "next/server";

export default async function SignIn() {
  const response = await axios.get(
    "https://localhost:3000/api/v1/user/details",
  );
  const data = response.data;
  console.log("data went out");
  return (
    <div>
      {data.name} {data.email}
    </div>
  );
}
