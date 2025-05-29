
import { useEffect, useRef, useState } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: "fade-in" | "slide-up" | "slide-in-left" | "slide-in-right" | "scale-in";
  delay?: number;
  className?: string;
}

export const ScrollAnimation = ({ 
  children, 
  animation = "fade-in", 
  delay = 0, 
  className = "" 
}: ScrollAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out";
    
    if (!isVisible) {
      switch (animation) {
        case "fade-in":
          return `${baseClasses} opacity-0 translate-y-8`;
        case "slide-up":
          return `${baseClasses} opacity-0 translate-y-12`;
        case "slide-in-left":
          return `${baseClasses} opacity-0 -translate-x-12`;
        case "slide-in-right":
          return `${baseClasses} opacity-0 translate-x-12`;
        case "scale-in":
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
};
