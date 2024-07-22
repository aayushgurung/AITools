"use client";

import React, { useState } from "react";
import ErrorComponent from "../Error";
import useFetchData from "@/app/hooks/useFetchData";
import Output from "../Output";
import Input from "../Input";
import StartButton from "../StartButton";

interface InputOutputProps {
  apiUrl: string;
  requestBody?: Record<string, any>;
  apiPath: string;
}

const InputOutput: React.FC<InputOutputProps> = ({
  apiUrl,
  requestBody,
  apiPath,
}) => {
  const [showError, setShowError] = useState<boolean>(false);
  const { fetchData, isloading, output } = useFetchData();
  const [imageBase64, setImageBase64] = useState("");
  const [error, setError] = useState<string>();
  const updateImageBase64 = (imageData: string) => {
    setImageBase64(imageData);
  };

  const handleDismissError = () => {
    setShowError(false);
  };

  const handleClick = async () => {
    if (!imageBase64) {
      setShowError(true);
      setError('Please Upload atleast one file');
      return;
    }
    try {
      console.log('INSIDE HANDLE CLICK')
      const body = {
        apiPath: apiPath,
        body: {
          files: {
            image: imageBase64
              ? imageBase64.replace(/^data:image\/\w+;base64,/, "")
              : "",
          },
          inbody: { ...requestBody },
        },
      };
      console.log('SENDING API REQUEST TO SERVER')
      await fetchData(
        `${process.env.SERVER_NEXT}${apiUrl}`,
        body,
        "application/json"
      );
    } catch (error) {
      setShowError(true);
      if (error instanceof Error) {
        console.log('error')
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
      <Input onImageSelect={updateImageBase64} accepts={'image/*'} />
      <StartButton isloading={isloading} handleClick={handleClick} />
      <Output
        isloading={isloading}
        output={output.enhanced_image_base64}
        showDownloadBtn={true}
      />
    </div>
  );
};

export default InputOutput;
