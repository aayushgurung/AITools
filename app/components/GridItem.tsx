import React, { ReactNode } from "react";
import Image from "next/image";

type GridItemProps = {
  title: string;
  description: string;
  link: string;
  children: ReactNode;
  href:string;
};

const GridItem: React.FC<GridItemProps> = ({
  title,
  description,
  link,
  children,
  href,
}) => {
  return (
    <>
      <div className="flex border border-gray-300 rounded-lg">
        <div className="w-1/4 p-4 ">
          <Image src={href} alt="image" width="100" height="10" />
        </div>
        <div className="w-full p-4 ">
          <h3 className="text-xl font-semibold">
            <a href={link} className="text-indigo-600 hover:underline">
              {title}
            </a>
          </h3>
          <p className="mt-2">{description}</p>
          {children}
        </div>
      </div>
    </>
  );
};

export default GridItem;
