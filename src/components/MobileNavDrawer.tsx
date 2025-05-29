
import { X, Home, FileText, Code, Camera, User } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export const MobileNavDrawer = ({ isOpen, onClose, activeSection }: MobileNavDrawerProps) => {
  const { isDark } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "blogs", label: "Blogs", icon: FileText },
    { id: "projects", label: "Projects", icon: Code },
    { id: "photography", label: "Photography", icon: Camera },
    { id: "about", label: "About", icon: User },
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900 border-l border-gray-800 z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Navigation
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="p-6">
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-left transition-all duration-200 group ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <item.icon 
                  size={20} 
                  className={`transition-colors ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-gray-500 group-hover:text-white'
                  }`}
                />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800">
          <div className="text-center text-sm text-gray-500">
            Creative Portfolio © 2024
          </div>
        </div>
      </div>
    </>
  );
};
