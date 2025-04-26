// Home.js
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutsSection from "./components/AboutsSection";
import SkillsSection from "./components/SkillsSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Navbar />

      <div className="relative">
        <HeroSection />
      </div>

      <div className="bg-[#2c3b49]" id="about">
        <AboutsSection/>
      </div>

      <div className="bg-gray-50" id="skills">
        <SkillsSection/>
      </div>
     
      
      <div className="bg-gradient-to-tl from-blue-500 to-black" id="projects">
        <Projects/>
      </div>

      <div className="bg-[#f5f5f5]" id="contact">
        <Contact />
      </div>

      <div className="bg-[#0e496b]">
        <Footer />
      </div>
    </main>
  );
}
