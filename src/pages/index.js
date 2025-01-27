import SubNav from "@/components/molecules/SubNav";
import Hero from "@/components/organism/Hero";
import Articles from "../components/organism/Articles";
import Image from "next/image";
import LinkAtm from "@/components/atoms/LinkAtm";

export default function Home() {
  return (
    <>
      {/* content */}
      <div className="w-full">
        {/* hero */}
        <Hero />

        {/* subnav */}
        <SubNav text="Artikel Kesehatan Terkini untuk Anda" />

        {/* articles */}
        <Articles />
      </div>

      
    </>
  );
}
