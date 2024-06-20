"use client"

import Image from "next/image";
import React from "react";
import { UserButton } from "@clerk/nextjs";
const Navbar = () => {
  const handleNavClick = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex items-center justify-between px-5 py-0 md:py-3 border-b-1 shadow-md w-full container">
      <Image src="/logo.png" alt="logo" width={100} height={50} />
      <div>
        <ul className="hidden md:flex gap-8">
          <li
            className="hover:text-white hover:bg-blue-500 font-semibold px-2 rounded-lg  ease-linear duration-100"
            onClick={() => handleNavClick("Hero")}
          >
            Home
          </li>
          <li
            className="hover:text-white hover:bg-blue-500 font-semibold px-2 rounded-lg  ease-linear duration-100"
            onClick={() => handleNavClick("History")}
          >
            History
          </li>
          <li
            className="hover:text-white hover:bg-blue-500 font-semibold px-2 rounded-lg ease-linear duration-100"
            onClick={() => handleNavClick("ContactUs")}
          >
            Contact Us
          </li>
        </ul>
      </div>

      <UserButton />
    </div>
  );
};

export default Navbar;
