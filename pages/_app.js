import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const { pathname } = useRouter();
  return (
    <>
      <SessionProvider session={session}>
        {pathname.includes("/admin") || pathname.includes("/register") ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </SessionProvider>
    </>
  );
}

export default MyApp;
