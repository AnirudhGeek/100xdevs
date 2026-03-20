


export default function SignIn(){
    return (
        <div className="flex flex-col items-center gap-5 mt-5">
            singin page
            <input className="bg-white text-black px-2 py-1 outline-0 rounded-lg" type="text" placeholder="enter your username" />
            <input  className="bg-white text-black px-2 py-1 outline-0 rounded-lg" type="password" placeholder="enter your password" />
            <button className="bg-blue-400 text-white px-2 py-1 text-lg rounded-lg hover:bg-blue-500 hover:cursor-pointer">Signin</button>
        </div>
    )
}