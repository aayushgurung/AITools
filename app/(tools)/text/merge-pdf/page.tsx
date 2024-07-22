import React from "react";
import Banner from "@/app/components/Banner";
import InputOutput from "@/app/components/MergePdf/InputOutput";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Resizer",
  description: "Darvilabs AI Tools",
};

const imageEnhancer = () => {
  const apiUrl = "resize-image";
  const apiPath="enhance_image"
  return (
    <>
      <Banner title="Image Resizer" />
      <InputOutput />
    </>
  );
};

export default imageEnhancer;
