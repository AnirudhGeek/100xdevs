"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SessionProvider>
        <RootHome />
      </SessionProvider>
    </div>
  );
}

export function RootHome() {
  const session = useSession();
  return (
    <div>
      {session.status === "authenticated" && (
        <button
          className="bg-white text-black px-2 py-1 rounded "
          onClick={() => signOut()}
        >
          Sign out
        </button>
      )}
      {session.status === "unauthenticated" && (
        <button
          className="bg-white text-black px-2 py-1 rounded "
          onClick={() => signIn()}
        >
          Sign in
        </button>
      )}
    </div>
  );
}
