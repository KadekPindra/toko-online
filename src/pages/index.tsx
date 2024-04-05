import Image from "next/image";
import { Inter } from "next/font/google";
import { signIn, signOut, useSession } from "next-auth/react";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useSession();
  return (
    <main
      className={`flex min-h-screen items-center justify-center p-24 ${inter.className}`}
    >
      <button className="ml-5 bg-blue-500 px-4 py-3 font-semibold rounded-lg text-white" onClick={() => (data ? signOut() : signIn())}>
        {data ? 'Logout' : 'Login'}
      </button>
    </main>
  );
} 
