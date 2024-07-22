import Banner from "./components/Banner";
import Grid from "./components/Grid";
import GridItem from "./components/GridItem";

export default function Home() {
  return (
    <>
      <Banner title="AI Tools" />
      <div className="container mx-auto px-4 sm:px-20">
        <Grid>
          <GridItem
            href={"/icons/image-enhancer.png"}
            title="Image Enhancer"
            description="Enhance the quality and appearance of your images using advanced algorithms."
            link="/image/image-enhancer"
          />
          <GridItem
            href={"/icons/face-enhancer.png"}
            title="Face Enhancer"
            description="Elevate facial features and refine image quality with our AI-powered Face Enhancer."
            link="/image/face-enhancer"
          />
          <GridItem
            href={"/icons/eye-and-ear-detection.png"}
            title="Eye and Ear Detection and Count"
            description="Detect and count eyes and ears in images effortlessly."
            link="/image/eye-ear-detection"
          />
          <GridItem
            href={"/icons/face-image-comparator.png"}
            title="Face Image Comparator"
            description="Compare and analyze facial images for similarity and differences."
            link="/image/face-comparator"
          />
          <GridItem
            href={"/icons/image-enhancer.png"}
            title="Document Portion Extraction from Image"
            description="Efficiently extract specific portions of text or images from documents."
            link="/image/document-extract"
          />
          <GridItem
            href={"/icons/image-enhancer.png"}
            title="Image Resizer"
            description="Efficiently resize images and change formats."
            link="/image/image-resizer"
          />
          <GridItem
            href={"/icons/image-to-text.png"}
            title="Image to Text"
            description="Extract text content from images using our powerful AI conversion tool."
            link="/image-to-text"
          />
          <GridItem
            href={"/icons/pdf-to-text.png"}
            title="PDF to Text"
            description="Convert PDF documents into text files with ease and precision."
            link="/pdf-to-text"
          />

          <GridItem
            href={"/icons/image-enhancer.png"}
            title="Image Captioning"
            description="Automatically generate descriptive captions for your images."
            link="/image-captioning"
          />
        </Grid>
      </div>
    </>
  );
}
