"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Signin() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details",
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      });
  }, []);


  if(loading) return <h1>loading...</h1>  

  return <div>
    {data.name} {data.email}
  </div>;
}
