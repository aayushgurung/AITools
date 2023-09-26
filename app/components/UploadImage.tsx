import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from '@fortawesome/free-solid-svg-icons';

const UploadImage = () => {
  return (
    <section className="container mx-auto mt-8 px-20">
      <div
        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg px-20 border border-black border-dashed"
      >
        <div className="text-center font-bold">Upload Your Images Here</div>
        <div className="h-32 flex flex-col justify-center items-center">
          <div className="text-center">
            <p className="text-lg font-bold">
              <FontAwesomeIcon 
              icon={faImage}
              className="fa-regular fa-image fa-2xl" 
              style={{ color: "#959697" }}
              />
            </p>
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded mt-4"
            >
              Choose Image
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UploadImage