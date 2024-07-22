import Banner from "@/app/components/Banner";
import InputOutput from "@/app/components/ImageEnhancer/InputOutput";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Face Enhancer",
  description: "Darvilabs AI Tools",
};

const faceEnhancer: React.FC = () => {
  const apiUrl = "image-enhancer";
  const apiPath="enhance"
  const requestBody = {};
  return (
    <>
      <Banner title="Face Enhancer" />
      <InputOutput apiUrl={apiUrl} requestBody={requestBody} apiPath={apiPath} />
    </>
  );
};

export default faceEnhancer;
