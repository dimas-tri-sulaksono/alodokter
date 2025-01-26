import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "@/components/organism/Footer";
import Nav from "@/components/organism/Nav";
import NavTransparent from "@/components/organism/NavTransparent";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      const navbar = document.querySelector(".top-navbar");
      console.log(navbar);

      const handleScroll = () => {
        if (window.scrollY > 50) {
          navbar?.classList.remove("bg-transparent");
          navbar?.classList.add("bg-blue-500");
        } else {
          navbar?.classList.remove("bg-blue-500");
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup listener saat komponen unmount
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [router.pathname]);

  return (
    <>
      {router.pathname === "/" ? <NavTransparent /> : <Nav />}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}
