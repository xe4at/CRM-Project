import "@/styles/globals.css";
import Layout from "../../components/layout/layout";
import ToastProvider from "../../providers/toast-provider";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastProvider />
    </Layout>
  );
}
