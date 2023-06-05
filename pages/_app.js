import TokyoState from "@/src/Context";
import PreLoader from "@/src/layout/PreLoader";
import "@/styles/globals.css";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <TokyoState>
      <PreLoader />
      <Component {...pageProps} />
        <Analytics />
    </TokyoState>
  );
}
