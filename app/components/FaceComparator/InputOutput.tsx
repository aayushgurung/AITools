"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import ErrorComponent from "../Error";
import Input from "../Input";
import Output from "../Output";
import useFetchData from "@/app/hooks/useFetchData";
import StartButton from "../StartButton";

interface InputOutputProps {
  apiUrl: string;
  requestBody: Record<string, any>;
}

const InputOutput: React.FC<InputOutputProps> = ({ apiUrl, requestBody }) => {
  const [showError, setShowError] = useState<boolean>(false);
  const [firstImage, setFirstImageBase64] = useState<string>("");
  const [secondImage, setSecondImageBase64] = useState<string>("");
  const [error, setError] = useState<string>();
  const { fetchData, isloading, output } = useFetchData();

  const handleDismissError = () => {
    setShowError(false);
  };
  const setFirstImage = (imageData: string) => {
    setFirstImageBase64(imageData);
  };
  const setSecondImage = (imageData: string) => {
    setSecondImageBase64(imageData);
  };
  const handleClick = async () => {
    if (!firstImage || !secondImage) {
      setShowError(true);
      setError('Please upload atleast one file')
      return;
    }
    try {
      const body = {
        apiPath: "compare_faces",
        body: {
          files: {
            image_1: firstImage
              ? firstImage.replace(/^data:image\/\w+;base64,/, "")
              : "",
            image_2: secondImage
              ? secondImage.replace(/^data:image\/\w+;base64,/, "")
              : "",
          },
          inbody: { ...requestBody },
        },
      };
      await fetchData(
        `${process.env.SERVER_NEXT}${apiUrl}`,
        body,
        "application/json"
      );
    } catch (error) {
      setShowError(true);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(error as string);
      }
    }
  };

  return (
    <div>
      {showError && (
        <ErrorComponent error={error} onClose={handleDismissError} />
      )}
      {/* Input */}
      <div className="text-center text-lg font-bold mt-3">
        Upload two images containing faces to compare them.
      </div>
      <section className="flex flex-col mt-4 md:flex-row">
        <div className="w-full md:w-1/2">
          <Input onImageSelect={setFirstImage} accepts={'image/*'} />
        </div>
        <div className="w-full md:w-1/2">
          <Input onImageSelect={setSecondImage} accepts={'image/*'} />
        </div>
      </section>

      <StartButton isloading={isloading} handleClick={handleClick} />
      {/* Output */}
      <Output isloading={isloading} output={null} showDownloadBtn={false}>
        <div> </div>
        {output && (
          <div>
            <div className="font-bold">Match Accuracy</div>
            {output.match_accuracy} %
            <div>
              {output.match_accuracy > 70 ? (
                <>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />{" "}
                  Match
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} />{" "}
                  Does not match
                </>
              )}
            </div>
          </div>
        )}
      </Output>
    </div>
  );
};

export default InputOutput;
