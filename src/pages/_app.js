import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "@/components/organism/Footer";
import Nav from "@/components/organism/Nav";
import NavTransparent from "@/components/organism/NavTransparent";
import "@/styles/globals.css";
import ChatNow from "@/components/molecules/ChatNow";
import NavBottom from "@/components/molecules/NavBottom";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      const navbar = document.querySelector(".top-navbar");
      // console.log(navbar);

      const handleScroll = () => {
        if (window.scrollY > 50) {
          navbar?.classList.remove("bg-transparent");
          navbar?.classList.add("bg-blue-500");
        } else {
          navbar?.classList.remove("bg-blue-500");
        }
      };

      window.addEventListener("scroll", handleScroll);

      // bersihin listener saat komponen unmount
      return () => window.removeEventListener("scroll", handleScroll);
    } else if (router.pathname != "/") {
      const login = document.querySelector(".login-mobile");
      const navMobile = document.querySelector(".navbar-mobile");
      const menuBottom = document.querySelector(".menu-bottom");
      login.classList.add("hidden");
      // menuBottom.classList.add("hidden");
      navMobile.classList.remove("shadow-lg");
    }
  }, [router.pathname]);

  return (
    <>
      {router.pathname === "/" || router.pathname === "/cari-dokter" ? (
        <NavTransparent />
      ) : (
        <Nav />
      )}
      <ChatNow />
      <Component {...pageProps} />
      <NavBottom />
      <Footer />
    </>
  );
}
