
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";
import { ParticleBackground } from "./ParticleBackground";
import { TypewriterText } from "./TypewriterText";

export const HeroSection = () => {
  const textRotation = [
    "Creative Developer",
    "Digital Artist", 
    "Tech Innovator",
    "Visual Storyteller",
    "UI/UX Designer",
    "Full-Stack Engineer"
  ];

  const scrollToNext = () => {
    const blogsSection = document.getElementById("blogs");
    if (blogsSection) {
      blogsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Enhanced animated background gradients */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <ScrollAnimation animation="fade-in" className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <ScrollAnimation animation="scale-in" delay={200}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Hello.
            </h1>
          </ScrollAnimation>
          
          <div className="text-2xl md:text-4xl font-light mb-8 h-16 flex items-center justify-center">
            <ScrollAnimation animation="slide-in-left" delay={400}>
              <span className="text-gray-300">I'm a </span>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-in-right" delay={600}>
              <TypewriterText 
                texts={textRotation}
                speed={80}
                delay={2500}
                className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium ml-2"
              />
            </ScrollAnimation>
          </div>
          
          <ScrollAnimation animation="fade-in" delay={800}>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>
              Crafting digital experiences that blend creativity with cutting-edge technology. 
              Welcome to my universe of innovation and artistic expression.
            </p>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="slide-up" delay={1000}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "1.6s", animationFillMode: "forwards" }}>
            <button 
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 group transform hover:-translate-y-1"
            >
              <span className="group-hover:animate-pulse">View My Work</span>
            </button>
            <button 
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 transform hover:-translate-y-1"
            >
              About Me
            </button>
          </div>
        </ScrollAnimation>
      </ScrollAnimation>

      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-cyan-400 transition-colors animate-bounce opacity-0 animate-fade-in"
        style={{ animationDelay: "2s", animationFillMode: "forwards" }}
      >
        <ChevronDown size={32} />
      </button>
    </div>
  );
};
