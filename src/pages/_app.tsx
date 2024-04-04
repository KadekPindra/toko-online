import Navigation from "@/components/layout/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Noto_Sans } from "next/font/google";
("next/font/google");

const Noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className={Noto.className}>
        <Navigation />
        <Component {...pageProps} />;
      </div>
    </SessionProvider>
  );
}
