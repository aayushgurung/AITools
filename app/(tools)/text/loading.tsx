import React from "react";
import Image from "next/image";

const loading = () => {
  return (
    <>
      <section
        role="status"
        className="mt-2 pt-14 pb-14 text-white relative animate-pulse"
      >
        <div className="container mx-auto px-20 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          </h1>
          <div className="mt-4 z-10 relative text-justify">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 max-w-[500px]"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </div>
        </div>
        <section className="container mx-auto mt-8 px-20">
          <div className="flex flex-col items-center p-6 bg-white px-20 rounded-lg ">
            <div className="text-center font-bold">
              <div className="h-2.5 rounded-full bg-gray-200 w-36 mb-4 animate-pulse"></div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-center">
                <div className="mt-4 h-36 rounded-lg bg-gray-200 w-72 animate-pulse"></div>
                <button className="text-white px-4 py-2 rounded mt-4 opacity-50 cursor-not-allowed">
                  <div className="h-2 rounded-full bg-gray-200 w-36 mb-4 animate-pulse"></div>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto mt-8 px-20">
          <div className="flex flex-col items-center p-6 bg-white px-20 rounded-lg ">
            <div className="text-center font-bold">
              <div className="h-2.5 rounded-full bg-gray-200 w-36 mb-4 animate-pulse"></div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-center">
                <div className="mt-4 h-36 rounded-lg bg-gray-200 w-72 animate-pulse"></div>
                <button className="text-white px-4 py-2 rounded mt-4 opacity-50 cursor-not-allowed">
                  <div className="h-2 rounded-full bg-gray-200 w-36 mb-4 animate-pulse"></div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default loading;
