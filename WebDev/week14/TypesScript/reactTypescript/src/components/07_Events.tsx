import React, { useState, type ChangeEvent, type FormEvent, type KeyboardEvent, type MouseEvent } from "react"


export function FormExample(){
    const [name,setName] = useState("")
    const [color , setColor] = useState("Red")
    
    function handleChange(event : ChangeEvent<HTMLInputElement>){
        setName(event.target.value)
    }

    function handleKeyDown(event : KeyboardEvent<HTMLInputElement>){
        // event.key === "Enter"    -> do this or do that
    }   

    function handleButtonClick(event : MouseEvent<HTMLButtonElement>){
        event.preventDefault()
        console.log(name)
    }
    function ChangeEvent(event : ChangeEvent<HTMLSelectElement>){

    }

    function handleFormSubmit(event : FormEvent<HTMLFormControlsCollection){
        event.preventDefault()

    }


    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text"  value={name} onChange={handleChange} onKeyDown={handleKeyDown}/>
                
                    <select value={color} onChange={handleColorChange}>
                        <option value="red">Red</option>
                    </select>
                <button type="submit"  onClick={handleButtonClick}>Click</button>
            </form>
        </div>
    )
}