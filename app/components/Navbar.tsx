"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../../public/styles/index.css";

const Navbar = () => {
  const items = [
    { href: "/image/image-enhancer", text: "Image Enhancer" },
    { href: "/image/face-enhancer", text: "Face Enhancer" },
    { href: "/image/face-comparator", text: "Face Comparator" },
    {
      href: "/image/document-extract",
      text: "Document Extractor",
    },
    {
      href: "/image/eye-ear-detection",
      text: "Eye Ear Detection",
    },
    { href: "/image/image-resizer", text: "Image Resizer" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <>
      <div className="bg-white p-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black text-2xl font-bold ml-1 md:pl-20">
            <Link href="/" className="">
              <Image
                src="/logo.png"
                alt="Logo"
                className="w-24 h-auto sm:w-auto sm:h-auto" 
                width={120}
                height={80}
              />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-10 mr-20">
            <div className="group relative">
              <button className="text-black font-medium  hover:text-gray-700">Image</button>
              <div className="hidden group-hover:block absolute -mx-12 pt-2 max-md:max-w-max bg-white shadow-lg transition-all duration-300 text-center z-50 ">
                <ul className="w-max-content">
                  {items.map((item, index) => (
                    <li key={index} className="z-20 hover:bg-gray-300">
                      <Link
                        href={item.href}
                        className="block w-full text-black"
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden mr-2">
            <button onClick={toggleMobileMenu} className="text-black">
              <FontAwesomeIcon
                icon={faBars}
                className="fa-solid fa-xl"
                style={{ color: "black" }}
              />
            </button>
          </div>
        </div>
      </div>
      <hr className="h-1 w-full bg-gradient-to-r from-indigo-600 to-indigo-400 border-0"></hr>

      {/* Mobile Navigation Menu (Hidden by default) */}
      <div
        className={`md:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        } bg-white text-black px-4 pb-2 space-y-4 mt-1`}
      >

        <div className="">
          <div className="font-bold flex justify-between">
            Image Tools{" "}
          </div>
          {items.map((item, index) => (
            <p key={index} className="z-20">
              <Link href={item.href} className="block w-full mt-2 text-black">
                {item.text}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;