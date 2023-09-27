import Banner from "./components/Banner";
import InputOutput from "./components/InputOutput";
import Grid from "./components/Grid";
import GridItem from "./components/GridItem";
const bannerData = {
  title: "AI Tools",
  description: `Welcome to our AI Tools website, 
  your gateway to a world of cutting-edge artificial 
  intelligence solutions. Here, you'll find a diverse 
  array of AI-powered tools designed to simplify and enhance
   various aspects of your work and life. What sets us apart 
   is our unwavering commitment to providing lightning-fast 
   responses, ensuring that you can harness the power of AI with 
   unparalleled efficiency. Best of all, our tools are completely 
   free, making the incredible capabilities of artificial intelligence 
   accessible to everyone. Whether you're looking to boost productivity, 
   creativity, or simply explore the incredible potential of AI, 
   you've come to the right place. Explore our wide range of tools 
   and unlock the future of innovation today.`,
};

export default function Home() {
  return (
    <>
      <Banner {...bannerData} />
      <div className="container mx-auto px-20">
        <Grid>
          <GridItem href={'/icons/image-enhancer.png'}
            title="Image Enhancer"
            description="Enhance the quality and appearance of your images using advanced algorithms."
            link="/image-enhancer"
          >
            {/* Additional content for Image Enhancer */}
          </GridItem>
          <GridItem href={'/icons/face-enhancer.png'}
            title="Face Enhancer"
            description="Elevate facial features and refine image quality with our AI-powered Face Enhancer."
            link="/face-enhancer"
          >
            {/* Additional content for Face Enhancer */}
          </GridItem>
          <GridItem href={'/icons/eye-and-ear-detection.png'}
            title="Eye and Ear Detection and Count"
            description="Detect and count eyes and ears in images effortlessly."
            link="/eye-ear-detection"
          >
            {/* Additional content for Eye and Ear Detection */}
          </GridItem>
          <GridItem href={'/icons/face-image-comparator.png'}
            title="Face Image Comparator"
            description="Compare and analyze facial images for similarity and differences."
            link="/face-image-comparator"
          >
            {/* Additional content for Face Image Comparator */}
          </GridItem>
          <GridItem href={'/icons/image-to-text.png'}
            title="Image to Text"
            description="Extract text content from images using our powerful AI conversion tool."
            link="/image-to-text"
          >
            {/* Additional content for Image to Text */}
          </GridItem>
          <GridItem href={'/icons/pdf-to-text.png'}
            title="PDF to Text"
            description="Convert PDF documents into text files with ease and precision."
            link="/pdf-to-text"
          >
            {/* Additional content for PDF to Text */}
          </GridItem>
          <GridItem href={'/icons/image-enhancer.png'}
            title="Image Captioning"
            description="Automatically generate descriptive captions for your images."
            link="/image-captioning"
          >
            {/* Additional content for Image Captioning */}
          </GridItem>
          <GridItem href={'/icons/image-enhancer.png'}
            title="Face to Age Detection"
            description="Determine the age of a person from a facial image."
            link="/face-age-detection"
          >
            {/* Additional content for Face to Age Detection */}
          </GridItem>
          <GridItem href={'/icons/image-enhancer.png'}
            title="Face to Age Prediction"
            description="Predict the likely age of individuals based on facial characteristics."
            link="/face-age-prediction"
          >
            {/* Additional content for Face to Age Prediction */}
          </GridItem>
          <GridItem href={'/icons/image-enhancer.png'}
            title="Document Portion Extraction from Image"
            description="Efficiently extract specific portions of text or images from documents."
            link="/document-extraction"
          >
            {/* Additional content for Document Portion Extraction */}
          </GridItem>
        </Grid>
      </div>
    </>
  );
}
