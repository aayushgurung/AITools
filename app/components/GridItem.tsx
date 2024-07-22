import React from "react";
import Image from "next/image";
import Link from "next/link";

type GridItemProps = {
  href: string;
  title: string;
  description: string;
  link: string;
};

const GridItem: React.FC<GridItemProps> = ({
  title,
  description,
  link,
  href,
}) => {
  return (
    <>
      <div className="flex border border-gray-300 rounded-lg text-black">
        <div className="w-1/3 p-4 ">
          <Image src={href} alt="image" width="100" height="10" />
        </div>
        <Link href={link} className=" group">
          <div className="w-full p-4 h-full  group-hover:bg-indigo-600">
            <h3 className="text-xl font-semibold text-indigo-600 group-hover:text-white">{title}</h3>
            <p className="mt-2 group-hover:text-white">{description}</p> 
          </div>
        </Link>
      </div>
    </>
  );
};

export default GridItem;
