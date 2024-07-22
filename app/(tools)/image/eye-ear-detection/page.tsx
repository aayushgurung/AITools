import Banner from "@/app/components/Banner";
import InputOutput from "@/app/components/EyeEarDetection/InputOutput";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Eye Ear Detection",
    description: "Darvilabs AI Tools",
  };
const faceComparator = () => {
  const apiUrl = "image-enhancer";
  const apiPath="passport"
  return (
    <>
      <Banner title="Eye Ear Detection" />
      <InputOutput apiUrl={apiUrl} requestBody={{}} apiPath={apiPath} />
    </>
  );
};

export default faceComparator;
