import React from "react";

interface PropType {
  placeholder: string;
  size: "big" | "small";

}

export function TextInput({ placeholder, size }: PropType) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      style={{
        padding: size === "big" ? 20 : 10,
        margin: size === "big" ? 20 : 10,
        borderColor: "white",
        borderWidth: 1,
      }}
    ></input>
  );
}
