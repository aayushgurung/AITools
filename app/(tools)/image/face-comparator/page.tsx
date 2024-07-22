import Banner from "@/app/components/Banner";
import InputOutput from "@/app/components/FaceComparator/InputOutput";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Face Comparator",
    description: "Darvilabs AI Tools",
  };
const faceComparator = () => {
  const apiUrl = "image-enhancer";
  return (
    <>
      <Banner title="Face Comparator" />
      <InputOutput apiUrl={apiUrl} requestBody={{}} />
    </>
  );
};

export default faceComparator;
