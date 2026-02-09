import type React from "react"

const VARIANTS = ["primary" , "secondary" , "ghost" ] as const

type Variant = (typeof VARIANTS)[number]

type BadgeProps = {
    label : string,
    varients ?: Variant
}

export function Badge({label,varients="primary"}: BadgeProps){
    const styles : Record<Variant,React.CSSProperties>={
        primary : {
            color : "red"
        },
        secondary : {
            color : "yellow"
        },
        ghost : {
            color : "black"
        }
    }
    return <span style={styles[varients]}>{label}</span>
}