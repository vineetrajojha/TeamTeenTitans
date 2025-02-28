import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  console.log("this is working"); // Debugging log

  return (
    <div className="bg-white bg-opacity-50 overflow-x-hidden">
      <div className="poppins bg-gradient-to-br">
        <Navbar />
        <HeroSection />
        {/* <Footer /> */}
      </div>
    </div>
  );
}







