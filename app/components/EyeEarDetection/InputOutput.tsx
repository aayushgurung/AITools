"use client";

import React, { ReactNode, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import ErrorComponent from "../Error";
import StartButton from "../StartButton";

interface InputOutputProps {
  apiUrl: string; // API route for the specific page
  requestBody: Record<string, any>; // Request body for the specific page
  apiPath: string;
}
interface OutputImage {
  earCount: number;
  earDimensions: { height: number; score: string; width: number }[];
  eyeStatus: string;
  faceDimensions: { height: number; width: number };
  facePosition: string;
  image: string;
  imageDimensions: { height: number; width: number };
}

const InputOutput: React.FC<InputOutputProps> = ({
  apiUrl,
  requestBody,
  apiPath,
}) => {
  const [outputImage, setOutputImage] = useState<OutputImage | null>();
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
      const res = await fetch(`${process.env.SERVER_NEXT}${apiUrl}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          apiPath: apiPath,
          body: {
            files:{image: imageBase64
              ? imageBase64.replace(/^data:image\/\w+;base64,/, "")
              : ""}
            
          },
        }),
      });
      if (res.ok) {
        const output = await res.json();
        setIsLoading(false);

        setOutputImage(output.message);
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
          const capturedImageBase64 = reader.result as string;
          setImageBase64(capturedImageBase64);
        }
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
                    width="300"
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
      {/* <section className="container mx-auto mt-8 px-20">
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
      </section> */}
      <StartButton isloading={isloading} handleClick={handleClick}/>
      {/* Output */}
      <section className="container mx-auto mt-8 px-20 text-black">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg border border-black border-dashed">
          <div className="text-center font-bold text-black">Output</div>
          
            <div className="text-center w-full">
              <div className="mt-4 m-auto text-black">
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
                    <div className="flex flex-row max-xl:flex-none max-xl:flex-col">
                        <div className="w-full flex items-center justify-center">
                          <Image
                            src={`data:image/png;base64,${
                              outputImage && outputImage.image
                            }`}
                            alt="outputImage"
                            width="300"
                            height="80"
                            className=""
                          />
                      </div>
                      <div className="w-full flex flex-col justify-evenly">
                        <div className="flex">
                          <div className="w-1/4">
                            <p className="font-semibold text-black">Ear Count: </p>
                          </div>
                          <div className="w-3/4">
                            <p>{outputImage && outputImage.earCount}</p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="w-1/4">
                            <p className="font-semibold text-black">Ear Dimensions:</p>
                          </div>
                          <div className="w-3/4 text-black">
                            <p>
                              {outputImage &&
                                outputImage.earDimensions.map((ear, index) => (
                                  <p key={index} className="text-black">
                                    Height: {ear.height}, Width: {ear.width},
                                    Score: {ear.score}
                                  </p>
                                ))}
                            </p>
                          </div>
                        </div>
                        <div className="flex text-black">
                          <div className="w-1/4">
                            <p className="font-semibold text-black">Eye Status:</p>
                          </div>
                          <div className="w-3/4 ">
                            <p>{outputImage && outputImage.eyeStatus}</p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="w-1/4">
                            <p className="font-semibold text-black">Face Position:</p>
                          </div>
                          <div className="w-3/4">
                            <p>{outputImage && outputImage.facePosition}</p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="w-1/4">
                            <p className="font-semibold text-black">Face Dimensions:</p>
                          </div>
                          <div className="w-3/4 text-black">
                            Height:{" "}
                            {outputImage && outputImage.faceDimensions.height},
                            Width:{" "}
                            {outputImage && outputImage.faceDimensions.width}
                          </div>
                        </div>
                        <div className="flex">
                          <div className="w-1/4">
                            <p className="font-semibold text-black">Image Dimensions:</p>
                          </div>
                          <div className="w-3/4 text-black">
                            <p>
                              Height:{" "}
                              {outputImage &&
                                outputImage.imageDimensions.height}
                              , Width:{" "}
                              {outputImage && outputImage.imageDimensions.width}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          
        </div>
      </section>
    </div>
  );
};

export default InputOutput;
