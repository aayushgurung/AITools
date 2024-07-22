import React from "react";
import Banner from "@/app/components/Banner";
import InputOutput from "@/app/components/DocumentExtract/InputOutput";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Enhancer",
  description: "Darvilabs AI Tools",
};

const documentExtract = () => {
  const apiUrl = "image-enhancer";
  const apiPath="extract-document"

  return (
    <>
      <Banner title="Document Extractor" />
      <InputOutput apiUrl={apiUrl} apiPath={apiPath} />
    </>
  );
};

export default documentExtract;
