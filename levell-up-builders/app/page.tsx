import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ExpertisePreview from "@/components/ExpertisePreview";
import FeaturedProjects from "@/components/FeaturedProjects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0F1318] text-white">
      <Navbar />

      <Hero />

      <AboutPreview />

      <ExpertisePreview />

      <FeaturedProjects />

      <CTA />

      <Footer />
    </main>
  );
}