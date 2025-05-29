
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

export const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const textRotation = [
    "Creative Developer",
    "Digital Artist", 
    "Tech Innovator",
    "Visual Storyteller",
    "UI/UX Designer",
    "Full-Stack Engineer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textRotation.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const blogsSection = document.getElementById("blogs");
    if (blogsSection) {
      blogsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 overflow-hidden">
      {/* Enhanced animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-purple-400/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <ScrollAnimation animation="fade-in" className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent animate-fade-in">
            Hello.
          </h1>
          <div className="text-2xl md:text-4xl font-light mb-8 h-16 flex items-center justify-center">
            <span className="text-gray-300">I'm a </span>
            <span 
              key={currentText}
              className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium ml-2 animate-fade-in"
            >
              {textRotation[currentText]}
            </span>
          </div>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that blend creativity with cutting-edge technology. 
            Welcome to my universe of innovation and artistic expression.
          </p>
        </div>

        <ScrollAnimation animation="slide-up" delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button 
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 group"
            >
              <span className="group-hover:animate-pulse">View My Work</span>
            </button>
            <button 
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              About Me
            </button>
          </div>
        </ScrollAnimation>
      </ScrollAnimation>

      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-cyan-400 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </div>
  );
};
