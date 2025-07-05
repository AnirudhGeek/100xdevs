import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useFetch, usePostData } from './hooks/useFetch'

const App = () => {
    const postTitle = usePostData()
    const [currentPost,setCurrentPost] = useState(1)
    const {finalData,loading} = useFetch("https://jsonplaceholder.typicode.com/posts/"+currentPost,10)

    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }

    return (
    <div>
      {postTitle}
      <br />
      <br />
      {JSON.stringify(finalData)}

      <button onClick={()=>setCurrentPost(1)}>1</button>
      <button onClick={()=>setCurrentPost(2)}>2</button>
      <button onClick={()=>setCurrentPost(3)}>3</button>
    </div>
  )
}

export default App
