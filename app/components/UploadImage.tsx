"use client"

import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
const UploadImage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader()
      reader.onload=(event)=>{
        if (event.target&&event.target.result){
          setSelectedImage(event.target.result.toString())
        }
      }
      reader.readAsDataURL(selectedFile)
      console.log("Selected file:", selectedFile);
    }
  };
  return (
    <section className="container mx-auto mt-8 px-20">
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg px-20 border border-black border-dashed">
        <div className="text-center font-bold">Upload Your Images Here</div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            {selectedImage ? (
              <div className="mt-4 m-auto">
                <Image
            src={selectedImage}
            alt="Logo"
            className=""
            width="500"
            height="80"
          />
                
              </div>
            ) : (
              <p className="text-lg font-bold mt-4">
                <FontAwesomeIcon
                  icon={faImage}
                  className="fa-regular fa-image fa-2xl"
                  style={{ color: "#959697" }}
                />
              </p>
            )}
            {/* <p className="text-lg font-bold">
              <FontAwesomeIcon
                icon={faImage}
                className="fa-regular fa-image fa-2xl"
                style={{ color: "#959697" }}
              />
            </p> */}
            <button
              onClick={handleImageUpload}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded mt-4"
            >
              Choose Image
            </button>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadImage;
