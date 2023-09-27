import React from "react";

function Footer() {
  return (
    <>
      <section className="relative pt-8 pb-8 bg-indigo-600 overflow-hidden mt-10">
        <div className="container mx-auto mt-8">
          <div className="flex flex-wrap -m-8">
            <div className="w-full h-1\/2 :w-1/2">
              <p className="text-sm text-white text-center text-opacity-50 font-medium leading-relaxed">
                Copyright © 2023 DarviLab. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
