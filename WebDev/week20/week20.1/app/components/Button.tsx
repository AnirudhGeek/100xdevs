"use client";
import { useEffect, useState } from "react";

export default function Button() {
  //   const date = Date.now();    this will cause hydration error

  const [date, setDate] = useState<number>();

  useEffect(() => {
    setDate(Date.now());
  }, []);
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="text-white">{date}</div>
      <button
        className="px-5 mx-2 py-1 text-2xl bg-white text-black rounded "
        onClick={() => setCount((prev) => prev + 1)}
      >
        {count}
      </button>
    </div>
  );
}
