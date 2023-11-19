import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en" className="polka dark h-full">
      <Head>
        <meta name="theme-color" content="#0f172a" />
        <Script strategy="beforeInteractive" src={"/setDarkMode.js"} />
      </Head>
      <body className="h-full antialiased transition ease-in-out">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
