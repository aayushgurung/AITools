import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import Image from "next/image";
import { useContentfulData } from "../hooks/useContentfulData";

interface BannerProps {
  title: string;
}

const Banner: React.FC<BannerProps> = async ({ title }) => {
  const { fetchData } = useContentfulData(title);
  const description = await fetchData();
  return (
    <>
      <section className="bg-indigo-600 sm:pt-14 sm:pb-14 py-7 shadow-lg text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-20 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <div className="mt-4 z-10 relative text-justify ">
            <div className=" sm:hidden block">
              <div className="group">
                <div className="group-hover:hidden">
                  {description.substring(0, 150)}
                  {"..."}
                  <button className="">
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="fa-solid ml-5 fa-xl"
                      style={{ color: "#e0e7ff" }}
                    />
                  </button>
                </div>
                <div className="hidden group-hover:block">{description}</div>
              </div>
            </div>
            <div className="sm:block hidden">{description} </div>
          </div>
        </div>
        <Image
          className="absolute inset-0 h-full left-auto object-cover opacity-30 object-center mr-24 "
          src="/banner.png"
          alt="Hero Image"
          width="400"
          height="80"
        />
      </section>
    </>
  );
};

export default Banner;
