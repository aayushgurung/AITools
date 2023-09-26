import React from "react";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ProcessButton() {
  return (
    <>
      <section className="container mx-auto mt-8 px-20">
        <div className="mt-8 mb-8 text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded shadow-lg focus:outline-none focus:ring focus:ring-indigo-300">
          <p className="text-lg">
              <FontAwesomeIcon 
              icon={faPlay}
              className="fa-regular fa-image " 
              style={{ color: "#e0e7ff" }}
              /> Start
              </p>
          </button>
        </div>
      </section>
    </>
  );
}

export default ProcessButton;
