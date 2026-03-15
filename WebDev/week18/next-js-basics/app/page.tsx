import Image from "next/image";

export default function Home() {
  return (
    <div>
      hey there
      <br />
      <Button>Signup</Button>
    </div>
  );
}


function Button({children}){
  return (
    <div>{children}</div>
  )
}
