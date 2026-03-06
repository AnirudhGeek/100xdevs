"use client";
import { useState } from "react";

export default function Product() {

    const [count, setCount] = useState()
  const product = [
    {
      id: 1,
      name: "tomato",
      price: 100,
    },
    {
      id: 2,
      name: "pomato",
      price: 50,
    },
    {
      id: 3,
      name: "spinach",
      price: 80,
    },
  ];
  return (
    <div>
      This is the product page
      <div>
        {product.map((singleProduct) => (
          <div key={singleProduct.id} className="w-fit bg-white text-black px-2 py-1 text-2xl m-2 rounded">
            {`${singleProduct.name} = ${singleProduct.price}`}{" "}
            <button className="bg-blue-400 text-white px-2 py-1 rounded-lg hover:cursor-pointer">
              <a href={`/products/${singleProduct.id}`}>Click for details</a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
