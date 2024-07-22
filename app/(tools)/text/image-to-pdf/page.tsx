import React from "react";
import Banner from "@/app/components/Banner";
import InputOutput from "@/app/components/ImageEnhancer/InputOutput";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Enhancer",
  description: "Darvilabs AI Tools",
};

const imageEnhancer = () => {
  const apiUrl = "image-enhancer";
  const apiPath="enhance_image"
  const requestBody = {
    upscale: 4,
  };
  return (
    <>
      <Banner title="Image Enhancer" />
      <InputOutput apiUrl={apiUrl} requestBody={requestBody} apiPath={apiPath} />
    </>
  );
};

export default imageEnhancer;
