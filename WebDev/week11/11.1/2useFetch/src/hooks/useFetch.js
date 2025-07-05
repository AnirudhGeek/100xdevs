import { useEffect } from "react";
import { useState } from "react";

export function usePostData(){
    const [post,setPost] = useState({})

    async function getData(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const json =await response.json()
        setPost(json)
    }

    useEffect(()=>{ 
        getData()
    },[])

    return post.title
}

export function useFetch(url,retryTime){
    const [finalData, setFinalData] = useState({})
    const [loading,setLoading] = useState(true)
    
    async function getDetails(){
        setLoading(true)
        const response = await fetch(url)
        const json = await response.json()
        setFinalData(json)
        setLoading(false)
    }

    useEffect(()=>{
        getDetails()
    },[url])

    useEffect(()=>{
        setInterval(getDetails, retryTime * 1000);
    })

    return {finalData,loading}
}