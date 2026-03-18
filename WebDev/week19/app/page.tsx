import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-10 text-4xl">
      Todo application
      <div className=" flex flex-col text-2xl">
        <Link className="border px-2 py-1 m-2 hover:text-black hover:bg-white rounded-md" href={"/signin"}>
          User signin page
        </Link>
        <Link className="border px-2 py-1 m-2 hover:text-black hover:bg-white rounded-md" href={"/signup"}>
          User signup page
        </Link>
      </div>
    </div>
  );
}
