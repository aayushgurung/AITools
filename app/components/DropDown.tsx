import React from "react";
import "../../public/styles/index.css";
import Link from "next/link";

interface prop{
  name:string
}

interface DropDownProps {
  items: { href: string; text: string }[];
}
const DropdownMenu: React.FC<DropDownProps> = ({ items }) => {
  return (
    <div className=" absolute -mx-5 max-md:max-w-max bg-white shadow-lg transition-all duration-300 text-center z-50 ">
      <ul>
        {items.map((item, index) => (
          <li key={index} className="z-20 hover:bg-gray-300">
            <Link href={item.href} className="block w-full">{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
