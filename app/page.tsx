import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { BentoFeatures } from "./components/BentoFeatures";
import { GlareDemo } from "./components/GlareDemo";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection
        title="Welcome to The Learning Hub"
        subtitle={{
          regular: "Physical Space, ",
          gradient: "Digital Learning",
        }}
        description="Utilise your empty space and transform into Learning Hub"
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
