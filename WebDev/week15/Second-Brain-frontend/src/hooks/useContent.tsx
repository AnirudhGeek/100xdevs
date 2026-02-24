import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"



export const useContent = () =>{
    const [contents ,setContents] = useState([])
    async function fetchContent(){
        const userContent = await axios.get(`${BACKEND_URL}/api/v1/content`,{
            headers : {
                "Authorization" : "Bearer " + localStorage.getItem("token")
            }
        })
        setContents(userContent.data.content)
    }
    useEffect(()=>{
        fetchContent()
        let interval = setInterval(() => {
            fetchContent()
        }, 10*1000);

        return()=>{
            clearInterval(interval)
        }
    },[])

    

    return {contents,fetchContent,setContents}
}