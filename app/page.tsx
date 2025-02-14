import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { BentoFeatures } from "./components/BentoFeatures";
import { GlareDemo } from "./components/GlareDemo";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection
        title="Welcome to The Learning HUB"
        subtitle={{
          regular: "Your Gateway to ",
          gradient: "Knowledge",
        }}
        description="Discover a world of learning opportunities with our comprehensive library platform. Access thousands of books, journals, and academic resources."
        ctaText="Get Started"
        ctaHref="/signup"
        gridOptions={{
          angle: 65,
          opacity: 0.2,
          cellSize: 60,
          lightLineColor: "#e6f0ff",
          darkLineColor: "#e6f0ff",
        }}
      />
      <AboutSection />
      <BentoFeatures />
      <GlareDemo />
      <Footer />
    </main>
  )
}
