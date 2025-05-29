
import { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";

export const ProjectPreview = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Neural Art Generator",
      description: "AI-powered digital art creation platform with real-time generation and style transfer capabilities.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      tags: ["AI", "React", "Python"],
      category: "AI/ML",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "Interactive Portfolio",
      description: "3D interactive portfolio website with WebGL animations and immersive user experience.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tags: ["Three.js", "WebGL", "React"],
      category: "Web Dev",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: "Creative Code Lab",
      description: "Experimental platform for generative art and creative coding experiments.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      tags: ["P5.js", "Creative Coding", "WebGL"],
      category: "Creative",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 4,
      title: "Data Visualization Suite",
      description: "Interactive data visualization tools for complex datasets with real-time analytics.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      tags: ["D3.js", "React", "Node.js"],
      category: "Data Viz",
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  const categories = ["All", "AI/ML", "Web Dev", "Creative", "Data Viz"];

  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A collection of my latest work spanning AI, web development, and creative technology.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Filter className="text-gray-400" size={20} />
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedFilter(category)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
              selectedFilter === category
                ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                : "bg-gray-800 text-gray-300 hover:text-cyan-400 hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.links.demo}
                  className="p-2 bg-gray-900/80 text-white rounded-lg hover:bg-cyan-500 transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
                <a
                  href={project.links.github}
                  className="p-2 bg-gray-900/80 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex space-x-4">
                <a
                  href={project.links.demo}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-center font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-2 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
          View All Projects
        </button>
      </div>
    </div>
  );
};
