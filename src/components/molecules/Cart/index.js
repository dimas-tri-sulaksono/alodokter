import LinkAtm from "@/components/atoms/LinkAtm";
import Image from "next/image";
import React from "react";

const Cart = () => {
  return (
    <>
      <LinkAtm
        href="https://play.google.com/store/apps/details?id=com.alodokter.android&shortlink=5c20772d&is_retargeting=true&pid=Website-Floating-Chat-Button&source_caller=ui"
        className={
          "center-alo fixed bottom-28 right-5 z-[100] h-[60px] w-[60px] cursor-pointer rounded-full bg-alo p-2 shadow-md transition-colors duration-300 ease-in-out"
        }
      >
        <Image
          src="/images/icons/cart.svg"
          alt="cart"
          className="h-[28px] w-[24px]"
          width={10}
          height={10}
        />
      </LinkAtm>
    </>
  );
};

export default Cart;
