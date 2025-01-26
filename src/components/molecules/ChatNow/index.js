import LinkAtm from "@/components/atoms/LinkAtm";
import Image from "next/image";
import React from "react";

const ChatNow = () => {
  return (
    <>
      <LinkAtm
        href="https://play.google.com/store/apps/details?id=com.alodokter.android&shortlink=5c20772d&is_retargeting=true&pid=Website-Floating-Chat-Button&source_caller=ui"
        className={"fixed bottom-6 right-9 z-[100] cursor-pointer"}
      >
        <Image
          src="/images/chat-now.gif"
          alt="chat-now"
          className="w-[202px]"
          width={202}
          height={81.39}
        />
      </LinkAtm>
    </>
  );
};

export default ChatNow;
