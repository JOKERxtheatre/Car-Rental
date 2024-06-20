import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  const handleClick = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-0 md:pt-10 gap-5 md:gap-0" id="Hero">
      <div>
        <h2 className="text-[40px] md:text-[60px] font-bold">Premium Car <span className="text-blue-500">Rental</span> in Your Area</h2>
        <h3 className="text-[20px] text-gray-400">Book the selected ca effortlessly, Pay for driving only, Book the Car Now</h3>
        <Button onClick={() => handleClick("Cars")} className="mt-5 bg-blue-500 rounded-2xl hover:scale-105 transition-all ease-in duration-150 hover:bg-blue-600">Explore Cars</Button>
      </div>
      <div className="flex items-center justify-center">
        <Image src="/car.png" alt="car" width={600} height={200} className="bg-blue-500 rounded-[50px]"/>
      </div>
    </div>
  );
};

export default Hero;
