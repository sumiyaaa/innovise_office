import Image from "next/image";
import Navbar from "./components/Navbar/page";
import HeroSection from "./components/HeroSection/page";

import GradientBackground from "./components/GradientBackground/page";
import OurServices from "./components/OurServices/page";
import WhyChooseUs from "./components/WhyChooseUs/page";

export default function Home() {
  return (
    <>
    <GradientBackground>
      <Navbar />
      <HeroSection />
    </GradientBackground>
     <OurServices/>
     <WhyChooseUs/>
     </>
  );
}
