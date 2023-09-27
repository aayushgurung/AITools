import Banner from "@/app/components/Banner";
import InputOutput from "@/app/components/InputOutput";

const bannerData = {
  title: "Face Enhancer",
  description: `The Image Enhancer is a powerful AI tool 
  that intelligently enhances the quality and appearance of images.
   Using advanced algorithms, it can improve sharpness, color vibrancy, 
   and overall visual clarity, making images look their best. Whether
    it's for photography, design, or any application, the Image Enhancer
     effortlessly transforms ordinary images into stunning, high-quality
      visuals with just a click.`,

};

export default function Home() {
  return (
    <>
      <Banner
        {...bannerData}
      />
      <InputOutput />
    </>
  );
}
