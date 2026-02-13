import { useRef, type FormEvent } from "react"

function getString(fd : FormData,key : string) : string | null {
    const result = fd.get(key)

    return typeof result === "string" ? result : null
}
function getNumberValue(fd : FormData,key : number) : number | null {
    const extractStringValue = getString(fd, key)

    if(extractStringValue === null){
        return null
    }

    const convertToNumber = Number(extractStringValue)

    return Number.isFinite(convertToNumber) ? convertToNumber : null
}

export function UseContextHook(){
    const formRef = useRef<HTMLFormElement | null>(null)
    
    function handleFormSubmit(e : FormEvent<HTMLFormElement>){
        e.preventDefault()


        const fd = new FormData(e.currentTarget)

        const extractName = getString(fd,"name") ?? "no name"
        const extractNumber = getNumberValue(fd,"age")
    }

    

    return (
        <form onSubmit={handleFormSubmit} ref={formRef}>
            <input name="name" defaultValue={"Guest"} type="text" />
            <input name="age" defaultValue={"18"} min={0}  type="number" />
            <button type="submit">Submit</button>

        </form>
    )
}