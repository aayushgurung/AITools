import React from "react";

interface downloadProps {
  output?: string | any;
  format?: string;
}

const DownloadButton: React.FC<downloadProps> = ({ output, format }) => {
  function determineFileFormat(inputValue: string): string {
    switch (inputValue) {
      case "/":
        return "jpeg";
      case "i":
        return "png";
      case "U":
        return "webp";
      case "R":
        return "gif";
      case "A":
        return "heif";
      default:
        return "Unknown";
    }
  }
  const downloadImage = () => {
    const link = document.createElement("a");
    const type = determineFileFormat(output.charAt(0));
    link.href = `data:image/${type};base64,${output}`;
    link.download = "download";
    link.click();
  };
  const downloadMergedPDF = () => {
    if (output) {
      const blob = new Blob([output], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "merged.pdf";
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const downloadButtonHandler = () => {
    if (format === "image") {
      downloadImage();
    } else {
      downloadMergedPDF();
    }
  };
  return (
    <>
      <button
        className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded shadow-lg focus:outline-none focus:ring focus:ring-indigo-300"
        onClick={downloadButtonHandler}
      >
        Download Image
      </button>
    </>
  );
};

export default DownloadButton;
