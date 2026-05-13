import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import AssemblySection from './components/sections/AssemblySection';
import IntroSection from './components/sections/IntroSection';
import ServicesSection from './components/sections/ServicesSection';
import WeddingSection from './components/sections/WeddingSection';
import GallerySection from './components/sections/GallerySection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import AboutSection from './components/sections/AboutSection';
import CTASection from './components/sections/CTASection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';

export default function Home() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AssemblySection />
        <IntroSection />
        <ServicesSection />
        <WeddingSection />
        <GallerySection />
        <TestimonialsSection />
        <AboutSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
