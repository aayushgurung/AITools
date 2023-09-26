import Banner from "./components/Banner";
import UploadImage from "./components/UploadImage";
import Footer from "./components/Footer";
import ProcessButton from "./components/ProcessButton";
import Output from "./components/Output";
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
    <Navbar/>
    <Banner />
    <UploadImage />
    <ProcessButton/>
    <Output />
    <Footer/>
    </>
  )
}
