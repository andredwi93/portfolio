import Head from "next/head";
import "../styles/globals.css";
// eslint-disable-next-line
import "swiper/css/bundle";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <ToastContainer />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
