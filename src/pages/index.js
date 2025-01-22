import FooterOrg from "@/components/organism/FooterOrg";
import NavOrg from "@/components/organism/NavOrg";

export default function Home() {
  return (
    <>
      <NavOrg className={"bg-white border-[#dadee4]"} />
      <div className="h-[400px]"></div>
      <FooterOrg />
    </>
  );
}
