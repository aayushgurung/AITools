"use client";

import React, { useState } from "react";
import ErrorComponent from "../Error";
import Options from "./Options";
import Input from "../Input";
import useFetchData from "@/app/hooks/useFetchData";
import Output from "../Output";
import StartButton from "../StartButton";

interface InputOutputProps {
  apiUrl: string;
  requestBody: Record<string, any>;
  apiPath: string;
}

const InputOutput: React.FC<InputOutputProps> = ({ apiUrl }) => {
  const [showError, setShowError] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [format, setFormat] = useState<string>("");
  const [imageBase64, setImageBase64] = useState("");
  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const { fetchData, isloading, output } = useFetchData();
  const handleValuesChange = (newValues: {
    width: number;
    height: number;
    format: string;
  }) => {
    setHeight(newValues.height);
    setWidth(newValues.width);
    setFormat(newValues.format);
  };
  const updateImageBase64 = (imageData: string) => {
    setImageBase64(imageData);
    const image = new window.Image();
    image.src = imageData;
    image.onload = () => {
      const width = image.width;
      const height = image.height;
      setImageDimensions({ width, height });
    };
  };

  const handleDismissError = () => {
    setShowError(false);
  };

  const handleClick = async () => {
    if (!imageBase64) {
      setShowError(true);
      setError("Please upload atleast one file");
      return;
    }
    try {
      setShowError(false);
      const body = {
        files: {
          image: imageBase64
            ? imageBase64.replace(/^data:image\/\w+;base64,/, "")
            : "",
        },
        width: width,
        height: height,
        format: format || "jpeg",
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
    <>
      <div>
        {showError && (
          <ErrorComponent error={error} onClose={handleDismissError} />
        )}
        <Input onImageSelect={updateImageBase64} accepts={'image/*'} />
        {imageBase64 && (
          <Options
            onValuesChange={handleValuesChange}
            width1={imageDimensions?.width}
            height1={imageDimensions?.height}
          />
        )}
        <StartButton isloading={isloading} handleClick={handleClick} />
        <Output
          isloading={isloading}
          output={output}
          showDownloadBtn={true}
          format="image"
        />
      </div>
    </>
  );
};

export default InputOutput;
