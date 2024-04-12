import Navigation from "@/components/fragments/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Lato, Noto_Sans } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
("next/font/google");

const Noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const disabledNavbar = [
  'auth',
  'admin',
]

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { pathname } = useRouter()

  return (
    <SessionProvider session={session}> 
    <Head>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
    </Head>
      <div className={Noto.className}>
        {!disabledNavbar.includes(pathname.split('/')[1]) && <Navigation />}
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
