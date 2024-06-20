import Image from "next/image";
import React from "react";
import { useState } from "react";
import copy from "clipboard-copy";

function Footer() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async (text :any) => {
    try {
      await copy(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy text to clipboard", error);
    }
  };

  return (
    <div
      className="flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-5 md:gap-10 mt-14"
      id="ContactUs"
    >
      <div className="flex items-start justify-center flex-col bg-blue-100 p-2 rounded-lg">
        <div className="flex items-center justify-start gap-2">
          <h1>Uzbekistan</h1>
          <Image
            src="/flag.png"
            alt="my photo"
            height={100}
            width={100}
            className=" w-[30px] h-[30px]"
          />
        </div>
        <div className="flex items-center justify-start gap-2">
          <h1>Tashkent shahar</h1>
          <Image
            src="/city.png"
            alt="my photo"
            height={100}
            width={100}
            className=" w-[26px] h-[26px]"
          />
        </div>
        <div className="flex items-center justify-start gap-2">
          <h1>Yangihayot tumani</h1>
          <Image
            src="/yangihayot.png"
            alt="my photo"
            height={100}
            width={100}
            className=" w-[25px] h-[25px]"
          />
        </div>
        <div className="tooltip" data-tip={isCopied ? "Copied!" : "Copy to Clipboard"}>
          <h1>
            Number: 
            <span onClick={(e) => handleCopyClick(e.target.textContent)} className="text-blue-500 underline"> +998990903456</span>
          </h1>
        </div>
        <div className="tooltip" data-tip={isCopied ? "Copied!" : "Copy to Clipboard"}>
          <h1>
            Telegram: 
            <span onClick={(e) => handleCopyClick(e.target.textContent)} className="text-green-500 underline"> @QXumoyun</span>
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col bg-blue-200 w-[200px] h-[145px] rounded-lg">
        <Image
          src="/me.png"
          alt="my photo"
          height={100}
          width={100}
          className="rounded-full w-[100px] h-[100px]"
        />
        <h1>Xumoyun Qadamboyev</h1>
      </div>
    </div>
  );
}

export default Footer;
