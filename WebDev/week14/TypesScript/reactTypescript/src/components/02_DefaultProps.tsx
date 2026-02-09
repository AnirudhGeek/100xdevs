interface GreetProps {
    name ?: string;
    shout ?: boolean
}

export function GreetA({name="Guest" , shout=false}: GreetProps){
    const text = shout ? name.toUpperCase() : name

    return (
        <div>hey {text}</div>
    )
}

export function GreetB(props:GreetProps){
    const name = props.name ?? "Guest"
    const shout = props.shout ?? false

    const text = shout ? name.toUpperCase() : name
    return (
        <div>
            hey {text}
        </div>
    )
}