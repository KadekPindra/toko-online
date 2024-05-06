import Image from "next/image";
import { Inter } from "next/font/google";
import { signIn, signOut, useSession } from "next-auth/react";
import HomePage from "./page/home";
import AboutPage from "./page/about";
import ReviewPage from "./page/review";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useSession();
  return (
    <main
      className={`flex flex-col h-full items-center justify-center ${inter.className}`}
    >
      <HomePage />
      <AboutPage />
      <ReviewPage />
    </main>
  );
} 
