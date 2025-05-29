
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { ScrollAnimation } from "./ScrollAnimation";

export const EnhancedFooter = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blogs" },
    { label: "Photography", href: "#photography" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900/95 to-purple-900/20 border-t border-gray-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-500/5 to-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Contact Section */}
        <ScrollAnimation animation="fade-in">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Let's Create Together
              </h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life with cutting-edge technology and creative design.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-cyan-400" size={20} />
                  </div>
                  <span>hello@creative.dev</span>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-purple-400" size={20} />
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-pink-400" size={20} />
                  </div>
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110"
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-white mb-6">Send a Message</h4>
              <ContactForm />
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="slide-up" delay={300}>
          <div className="border-t border-gray-800 pt-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Brand */}
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Creative.
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Crafting digital experiences that blend creativity with cutting-edge technology.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h5 className="text-white font-semibold mb-4">Quick Links</h5>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h5 className="text-white font-semibold mb-4">Stay Updated</h5>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest updates on new projects and blog posts.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-cyan-400"
                  />
                  <button className="px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all duration-300">
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>© {currentYear} Creative Portfolio. All rights reserved.</p>
              <p className="mt-2 md:mt-0">Built with React, TypeScript & Tailwind CSS</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  );
};
