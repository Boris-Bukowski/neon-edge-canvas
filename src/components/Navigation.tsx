
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { MobileNavDrawer } from "./MobileNavDrawer";

interface NavigationProps {
  activeSection: string;
}

export const Navigation = ({ activeSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "blogs", label: "Blogs" },
    { id: "projects", label: "Projects" },
    { id: "photography", label: "Photography" },
    { id: "about", label: "About" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Creative.
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === item.id ? "text-cyan-400" : "text-gray-300"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400" />
                  )}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-gray-800/50"
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-gray-800/50"
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-gray-800/50"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <MobileNavDrawer 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};
