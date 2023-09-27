"use client";

import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import ErrorComponent from "./Error";

const InputOutput = () => {
  const router = useRouter();
  const [outputImage, setOutputImage] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = `data:image/png;base64,${outputImage}`;
    link.download = "image.png";
    link.click();
  };
  const handleDismissError = () => {
    setShowError(false);
  };
  const handleClick = async () => {
    if (!imageBase64) {
      setShowError(true);
      return;
    }
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:3000/api/v1/face_Enhancer", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          image: imageBase64.replace(/^data:image\/\w+;base64,/, ""),
        }),
      });
      if (res.ok) {
        const output = await res.json();
        setIsLoading(false);
        setOutputImage(output.message["enhanced_image_base64"]);
      } else {
        throw new Error("Failed to pass the data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [imageBase64, setImageBase64] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      const reader: FileReader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          setSelectedImage(event.target.result.toString());
        }
        setImageBase64(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div>
      {showError && (
        <ErrorComponent error={"Upload Images"} onClose={handleDismissError} />
      )}
      {/* Input */}
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
                    width="200"
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
      {/* Process */}
      <section className="container mx-auto mt-8 px-20">
        <div className="mt-8 mb-8 text-center">
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded shadow-lg focus:outline-none focus:ring focus:ring-indigo-300"
            onClick={handleClick}
            disabled={isloading}
          >
            <p className="text-lg">
              {isloading ? (
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="fa-solid fa-spin "
                  style={{ color: "#e0e7ff" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faPlay}
                  className="fa-regular fa-image "
                  style={{ color: "#e0e7ff" }}
                />
              )}{" "}
              Start
            </p>
          </button>
        </div>
      </section>
      {/* Output */}
      <section className="container mx-auto mt-8 px-20">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg px-20 border border-black border-dashed">
          <div className="text-center font-bold">Output</div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-center">
              <p className="text-lg font-bold mt-4 m-auto">
                {isloading ? (
                  <div>
                    Processing <br />
                    <FontAwesomeIcon
                      icon={faSpinner}
                      className="fa-solid fa-spin "
                      style={{ color: "#4F46E5" }}
                    />
                  </div>
                ) : (
                  outputImage && (
                    <Image
                      src={`data:image/png;base64,${outputImage}`}
                      alt="outputImage"
                      width="200"
                      height="80"
                    />
                  )
                )}
              </p>
            </div>
          </div>
          <p className="mt-4">
            {outputImage && (
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded shadow-lg focus:outline-none focus:ring focus:ring-indigo-300"
                onClick={downloadImage}
              >
                Download Image
              </button>
            )}
          </p>
        </div>
      </section>
    </div>
  );
};

export default InputOutput;
