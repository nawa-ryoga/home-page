import type { AppProps } from "next/app";
import "@/styles/global.css";
import { NOTO } from "../styles/font";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style
        jsx
        global
      >{`
        html,
        body {
          font-family: ${NOTO.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
