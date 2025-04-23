import GuideSection from '@/components/Guide';
import FeaturesSection from '@/components/Features';
import Camp from "@/components/Camp";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import GetAppSection from '@/components/GetApp';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Camp />
      <GuideSection /> 
      <FeaturesSection />
      <GetAppSection />  
      <Footer/>
    </>
  );
}