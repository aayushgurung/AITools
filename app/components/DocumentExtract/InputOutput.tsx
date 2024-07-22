"use client";

import React, { useState } from "react";
import ErrorComponent from "../Error";
import Input from "../Input";
import useFetchData from "@/app/hooks/useFetchData";
import Output from "../Output";
import StartButton from "../StartButton";

interface InputOutputProps {
  apiUrl: string;
  apiPath: string;
}

const InputOutput: React.FC<InputOutputProps> = ({ apiUrl, apiPath }) => {
  const [showError, setShowError] = useState<boolean>(false);
  const { fetchData, isloading, output } = useFetchData();
  const [error, setError] = useState<string>();
  const [imageBase64, setImageBase64] = useState("");

  const updateImageBase64 = (imageData: string) => {
    setImageBase64(imageData);
  };
  const handleDismissError = () => {
    setShowError(false);
  };

  const handleClick = async () => {
    try {
      if (!imageBase64) {
        setShowError(true);
        setError('Please Upload atleast one file')
        return;
      }
      const body = {
        apiPath: apiPath,
        body: {
          files: {
            uploaded_document: imageBase64
              ? imageBase64.replace(/^data:image\/\w+;base64,/, "")
              : "",
          },
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
      <Input onImageSelect={updateImageBase64} accepts={'image/*'} />
      <StartButton isloading={isloading} handleClick={handleClick} />
      <Output
        isloading={isloading}
        output={output.extracted_document}
        showDownloadBtn={true}
      />
    </div>
  );
};

export default InputOutput;
