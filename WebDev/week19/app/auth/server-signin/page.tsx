import axios from "axios"



export default async function SignIn(){
    const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
    const data = response.data
    console.log("data went out")
    return (
        <div>
            {data.name}  {data.email}
        </div>
    )
}