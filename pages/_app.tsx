import { FixedHeaderSpacer, Header } from "@/components/Header";
import { DarkModeProvider } from "@/contexts/DarkModeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <>
        <Header />
        <FixedHeaderSpacer />
        <Component {...pageProps} />
      </>
    </DarkModeProvider>
  );
}
