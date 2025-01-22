import LinkAtm from "@/components/atoms/LinkAtm";
import Image from "next/image";
import React from "react";

const FooterMedsosMol = () => {
  return (
    <>
      <div className="footer-data-item-social-medi inline-block w-[330px] align-top text-[18px] mb-[30px]">
        <h4 className="m-0 text-[20px] font-bold">Media Sosial</h4>
        <div className="footer-row-social-media-list flex justify-between max-w-[260px] my-[14px] mb-[60px]">
          <LinkAtm className={"mr-[20px]"}>
            <Image
              className="w-[35px]"
              src="images/facebook.svg"
              alt="facebook"
              width={35}
              height={35}
            />
          </LinkAtm>
          <LinkAtm className={"mr-[20px]"}>
            <Image
              className="w-[35px]"
              src="images/twitter.svg"
              alt="twitter"
              width={35}
              height={35}
            />
          </LinkAtm>
          <LinkAtm className={"mr-[20px]"}>
            <Image
              className="w-[35px]"
              src="images/linkedin.svg"
              alt="linkedin"
              width={35}
              height={35}
            />
          </LinkAtm>
          <LinkAtm className={"mr-[20px]"}>
            <Image
              className="w-[35px]"
              src="images/instagram.svg"
              alt="instagram"
              width={35}
              height={35}
            />
          </LinkAtm>
          <LinkAtm>
            <Image
              className="w-[35px]"
              src="images/youtube.svg"
              alt="youtube"
              width={35}
              height={35}
            />
          </LinkAtm>
        </div>
        <p className="mt-[38px] mb-[10px] text-[16px] font-bold">
          Bagian dari Alodokter
        </p>
        <div className="alo-group block">
          <span className="mr-[23px]">
            <LinkAtm class="mr-[25px]">alomedika.com</LinkAtm>
          </span>
          <span>
            <LinkAtm>pobpad.com</LinkAtm>
          </span>
        </div>
      </div>
    </>
  );
};

export default FooterMedsosMol;
