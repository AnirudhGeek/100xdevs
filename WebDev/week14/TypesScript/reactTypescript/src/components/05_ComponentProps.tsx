import type { ComponentProps, CSSProperties } from "react";

type ButtonBaseProp = ComponentProps<"button">
type ButtonProp = ButtonBaseProp & {varients ?: "primary" | "secondary"}

export function Button({varients = "primary" , style, ...rest}: ButtonProp){
    const base : CSSProperties = {
        backgroundColor : "red"
    }

    return <button style={{...base,...style}} {...rest}/>
}