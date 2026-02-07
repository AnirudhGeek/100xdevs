// Exclude<U,V>  => remove from U those members assignable to V
// Extract<U,V>  => keep from U those members assignable to V
// Nonnullable

type EventType1 = "click" | "submit" | "hover" | "keydown" | "keyup"
type EventType2 = Exclude<EventType1,"keydown">


function handleEvent1(e : EventType2){
    console.log(e)
}

// handleEvent1("keydown")    error
handleEvent1("click")



type ActionsN1 = "create" | "update" | "delete" | "read"
type ActionsN2 = Extract<ActionsN1,"create" | "update" | "read">    //so here we dont have delete 

function handleEvent2(e: ActionsN2){
    console.log(e)
}

handleEvent2("create") 




type MayNumber = number | null | undefined
type CleanNumber = NonNullable<MayNumber>    // this will only going to keep number 


function square(num : CleanNumber){
    return num * 2 
}

square(10)
// square(null)    error because now it is non assignable
