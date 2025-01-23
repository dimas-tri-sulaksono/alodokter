import ArticleTagAtm from "@/components/atoms/ArticleTagAtm";
import LinkAtm from "@/components/atoms/LinkAtm";
import CardPostMol from "@/components/molecules/CardPostMol";
import SubNavMenuMol from "@/components/molecules/SubNavMenuMol";
import FooterOrg from "@/components/organism/FooterOrg";
import NavOrg from "@/components/organism/NavOrg";
import Image from "next/image";
// import { Popins } from "next/fonts/google";

// const poppins = Popins({ subset: ["latin"] });

export default function DiskusiTerkait() {
  return (
    <>
      <NavOrg className={`bg-white border-[#dadee4]`} />
      <div className="h-[420px]"></div>
      <FooterOrg />
    </>
  );
}
