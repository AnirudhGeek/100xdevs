import { useState } from "react";



export function Counter() {
  const [count, setCount] = useState(0); //inferred as number

  return <div>{count}</div>;
}

//idle ,loading,success , error
type LoadState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: string }
  | { status: "error"; message: string };


  function heavyDefault() : number{
    return 100
}

type User = {
    type : string
}

export function LoaderDemo() {
  const [state, setState] = useState<LoadState>({status: "idle"});
    const [n, setN] = useState<number>(()=>heavyDefault())

    //we should now directly give the type null
    // const [user,setUser] = useState(null)
    const [user,setUser] = useState<User | null>(null)    //right way  

  async function fetchData(){
    setState({status : "loading"})

    //mockapicall

    setState({status : "success",data : "fetched"})


    //catch

    setState({status:"error",message : "Error!"})
    
  } 
  return <div>Loader</div>;
}




