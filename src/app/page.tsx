import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ScreenshotGallery } from "@/components/sections/ScreenshotGallery";
import { InstallSteps } from "@/components/sections/InstallSteps";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <ScreenshotGallery />
        <InstallSteps />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
