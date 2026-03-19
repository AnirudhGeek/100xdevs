import Link from "next/link";

export default function Home(){
  return(
    <div className="flex flex-col items-center gap-10 pt-10 ">
      <h1 className="text-4xl">

      Home page
      </h1>
      <div className="flex flex-col gap-4">
        <Link className="text-2xl px-2 py-1 border hover:bg-white hover:text-black rounded-md" href={"/signin"}>Signin page</Link>
        <Link className="text-2xl px-2 py-1 border hover:bg-white hover:text-black rounded-md" href={"/signup"}>Signup page</Link>
      </div>
    </div>
  )
}