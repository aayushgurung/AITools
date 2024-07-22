import React from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import DownloadButton from "./DownloadButton";

interface outputProps {
  isloading?: boolean;
  output?: string | any;
  children?: React.ReactNode;
  showDownloadBtn:boolean
  format?:string
}

const Output: React.FC<outputProps> = ({
  isloading,
  output,
  children,
  showDownloadBtn,
  format
}) => {
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
  // const signatures: any = {
  //   JVBERi0: "application/pdf",
  //   R0lGODdh: "image/gif",
  //   R0lGODlh: "image/gif",
  //   iVBORw0KGgo: "image/png",
  //   "/9j/": "image/jpg",
  //   UklGR: "image/webp",
  // };
  // const getMimeType = (output: string) => {
  //   for (const sign in signatures)
  //     if (output.startsWith(sign)) return signatures[sign];
  // };
  return (
    <>
      <section className="container mx-auto px-4 sm:px-20">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg px-20 border border-black border-dashed">
          <div className="text-center font-bold text-black">Output</div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-center">
              <div className="text-lg font-bold mt-4 m-auto">
                {isloading ? (
                  <div className="text-black">
                    Processing <br />
                    <FontAwesomeIcon
                      icon={faSpinner}
                      className="fa-solid fa-spin "
                      style={{ color: "#4F46E5" }}
                    />
                  </div>
                ) : children ? (
                  children
                ) : (
                  output && (
                    <div className="h-80 overflow-hidden">
                    <Image
                      src={`data:image/png;base64,${output}`}
                      alt="output"
                      width="300"
                      height="80"
                      className="max-h-full w-auto"
                    />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <p className="mt-4">
            {output && (
              <DownloadButton output={output} format={format}/>
            )}
          </p>
        </div>
      </section>
    </>
  );
};

export default Output;
