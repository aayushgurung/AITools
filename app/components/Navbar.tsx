"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import DropdownMenu from "./DropDown";
import "../../public/styles/index.css";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState<boolean[]>([]);

  const handleMouseEnter = (index: number) => {
    const updatedVisibility = Array(isDropdownVisible.length).fill(false);
    updatedVisibility[index] = true;
    setDropdownVisible(updatedVisibility);
  };

  const handleMouseLeave = (index: number) => {
    const updatedVisibility = [...isDropdownVisible];
    updatedVisibility[index] = false;
    setDropdownVisible(updatedVisibility);
  };
  return (
    <nav className="bg-light mt-2">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="pl-20">
          <Image
            src="/logo.png"
            alt="Logo"
            className=""
            width="120"
            height="80"
          />
        </Link>

        <div className="flex items-center space-x-10 mr-20">
          <div
            className="menu"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <button className="font-semibold">Image</button>
            {isDropdownVisible[0] && (
              <DropdownMenu
                items={[
                  { href: "/image/image-enhancer", text: "Image Enhancer" },
                  { href: "#", text: "Compare Image" },
                  { href: "#", text: "Menu3" },
                ]}
              />
            )}
          </div>
          <div
            className="menu"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <button className="font-semibold">Audio</button>
            {isDropdownVisible[1] && (
              <DropdownMenu
                items={[
                  { href: "#", text: "Menu1" },
                  { href: "#", text: "Menu2" },
                  { href: "#", text: "Menu3" },
                ]}
              />
            )}
          </div>
          <div
            className="menu"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
          >
            <button className="font-semibold">Text</button>
            {isDropdownVisible[2] && (
              <DropdownMenu
                items={[
                  { href: "#", text: "Menu1" },
                  { href: "#", text: "Menu2" },
                  { href: "#", text: "Menu3" },
                ]}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
