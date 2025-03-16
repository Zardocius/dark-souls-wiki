import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="mainWrap">
      <div className="container">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </div>
  );
}
