import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Image AI Tools",
  description: "Darvilabs AI Tools",
};

export default function ImageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section>
        {children}
        <hr className="h-px mt-11 mb-9 bg-gray-300 border-0 dark:bg-gray-700"></hr>

        <div className="container sm:px-20 px-4 mx-auto text-black">
          {" "}
          {/* Updated the container width */}
          <div className="text-indigo-600 font-bold">Image Enhancer Tools</div>
          <div className="flex flex-wrap mb-4 mt-3 ">
            {" "}
            {/* Use flex-wrap for mobile responsiveness */}
            <div className="w-full md:w-1/2 lg:w-1/4 mb-2 rounded">
              {" "}
              {/* Adjust column width based on breakpoints */}
              <Link href="/image/image-enhancer">Image Enhancer</Link>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-2 rounded">
              <Link href="/image/face-enhancer">Face Enhancer</Link>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-2 rounded">
              <Link href="/image/face-comparator">Face Comparator</Link>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-2 rounded">
              <Link href="/image/eye-ear-detection">Eye Ear Detection</Link>
            </div>
          </div>
          <div className="text-indigo-600 font-bold">Text AI Tools</div>
          <div className="flex flex-wrap mb-4 mt-3 ">
            {" "}
            {/* Use flex-wrap for mobile responsiveness */}
            <div className="w-full md:w-1/2 lg:w-1/4 mb-2 rounded">
              <Link href="/">Pdf to Text</Link>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-2 rounded">
              <Link href="/">Image to Text</Link>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-2 rounded">
              <Link href="/">Image Captioning</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
