
import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { BlogPreview } from "@/components/BlogPreview";
import { ProjectPreview } from "@/components/ProjectPreview";
import { PhotoPreview } from "@/components/PhotoPreview";
import { AboutSection } from "@/components/AboutSection";
import { EnhancedFooter } from "@/components/EnhancedFooter";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "blogs", "projects", "photography", "about"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <Navigation activeSection={activeSection} />
        
        <section id="home" className="min-h-screen">
          <HeroSection />
        </section>

        <section id="blogs" className="py-20">
          <ScrollAnimation animation="fade-in">
            <BlogPreview />
          </ScrollAnimation>
        </section>

        <section id="projects" className="py-20">
          <ScrollAnimation animation="fade-in">
            <ProjectPreview />
          </ScrollAnimation>
        </section>

        <section id="photography" className="py-20">
          <ScrollAnimation animation="fade-in">
            <PhotoPreview />
          </ScrollAnimation>
        </section>

        <section id="about" className="py-20">
          <ScrollAnimation animation="fade-in">
            <AboutSection />
          </ScrollAnimation>
        </section>

        <EnhancedFooter />
      </div>
    </ThemeProvider>
  );
};

export default Index;
