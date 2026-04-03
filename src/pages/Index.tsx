import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider fromDark={true} />
        <ServicesSection />
        <SectionDivider fromDark={true} />
        <PricingSection />
        <SectionDivider fromDark={false} />
        <BeforeAfterSection />
        <SectionDivider fromDark={false} />
        <GallerySection />
        <SectionDivider fromDark={true} />
        <LocationSection />
        <SectionDivider fromDark={false} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
