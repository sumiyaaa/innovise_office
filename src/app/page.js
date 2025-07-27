import Image from "next/image";
import Navbar from "./components/Navbar/page";
import HeroSection from "./components/HeroSection/page";

import GradientBackground from "./components/GradientBackground/page";

export default function Home() {
  return (
    <GradientBackground>
      <Navbar />
      <HeroSection />
    </GradientBackground>
  );
}
