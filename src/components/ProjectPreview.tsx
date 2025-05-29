
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { TagFilter } from "./TagFilter";
import { ProjectModal } from "./ProjectModal";
import { ScrollAnimation } from "./ScrollAnimation";

export const ProjectPreview = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const projects = [
    {
      id: 1,
      title: "Quantum Portfolio",
      description: "A personal website template with dynamic 3D elements",
      fullDescription: "This project pushed the boundaries of modern web development by integrating Three.js for immersive 3D interactions, React for component architecture, and a headless CMS for content management. It features fluid animations, dynamic content loading, and adaptive layouts for all device sizes.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
      technologies: ["React", "Three.js", "TypeScript", "GSAP", "Headless CMS"],
      tags: ["Web Dev", "3D", "Portfolio"],
      demoUrl: "#",
      githubUrl: "#",
      date: "2024-03-01"
    },
    {
      id: 2,
      title: "Audio Visualizer",
      description: "Interactive sound visualization with WebAudio API",
      fullDescription: "A creative experiment combining the WebAudio API with Canvas-based visualizations, this project transforms sound into dynamic visual patterns. Users can upload their own audio files or connect to streaming services to see their music come alive through algorithmic art.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=500&fit=crop",
      technologies: ["JavaScript", "Canvas API", "WebAudio API", "GLSL"],
      tags: ["Creative Coding", "Audio", "Visualization"],
      demoUrl: "#",
      githubUrl: "#",
      date: "2024-02-15"
    },
    {
      id: 3,
      title: "Neural Network Playground",
      description: "Educational tool to visualize machine learning algorithms",
      fullDescription: "This educational platform makes complex neural network concepts accessible through interactive visualizations. Users can manipulate parameters in real-time to see how different network architectures perform on various datasets, with detailed explanations of the underlying mathematical principles.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop",
      technologies: ["TensorFlow.js", "React", "D3.js", "Python"],
      tags: ["AI", "Education", "Data Visualization"],
      demoUrl: "#",
      githubUrl: "#",
      date: "2024-01-10"
    },
    {
      id: 4,
      title: "Digital Garden",
      description: "A knowledge management system with innovative navigation",
      fullDescription: "Inspired by the concept of digital gardening, this project reimagines how we organize and connect ideas. It features a force-directed graph for visualizing concept relationships, progressive markdown rendering, and bidirectional linking between notes. The system emphasizes emergent structure over rigid hierarchies.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
      technologies: ["Next.js", "Graph Databases", "MDX", "D3.js"],
      tags: ["Productivity", "Knowledge Management", "Web Dev"],
      demoUrl: "#",
      githubUrl: "#",
      date: "2023-12-05"
    },
    {
      id: 5,
      title: "Shader Playground",
      description: "Interactive environment for creating GLSL shader art",
      fullDescription: "A creative sandbox for digital artists and programmers to explore GLSL shader programming. The platform includes a real-time editor, parameter controls, and sharing capabilities. It supports both 2D and 3D shader creation with extensive documentation and example gallery for learning.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=500&fit=crop",
      technologies: ["WebGL", "GLSL", "React", "Firebase"],
      tags: ["Creative Coding", "Shaders", "Art"],
      demoUrl: "#",
      githubUrl: "#",
      date: "2023-11-20"
    },
    {
      id: 6,
      title: "AR Product Visualizer",
      description: "Augmented reality tool for e-commerce",
      fullDescription: "This augmented reality solution helps online shoppers visualize products in their actual environment before purchasing. Built with WebXR, it requires no app installation and works directly in the browser. Features include realistic lighting, scaled representation, and social sharing of AR preview images.",
      image: "https://images.unsplash.com/photo-1601932150281-3f5b7e2a1225?w=800&h=500&fit=crop",
      technologies: ["WebXR", "Three.js", "React", "Shopify API"],
      tags: ["AR/VR", "E-Commerce", "Web Dev"],
      demoUrl: "#",
      githubUrl: "#",
      date: "2023-10-15"
    }
  ];

  // Get project by ID
  const getProjectById = (id: number) => {
    return projects.find(project => project.id === id) || null;
  };

  // Handle opening project modal
  const openProjectModal = (id: number) => {
    setSelectedProject(id);
  };

  // Handle closing project modal
  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  // Get all unique tags
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  // Filter projects based on selected tags
  const filteredProjects = selectedTags.length > 0 
    ? projects.filter(project => project.tags.some(tag => selectedTags.includes(tag)))
    : projects;

  return (
    <div className="container mx-auto px-6">
      <ScrollAnimation animation="fade-in">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            A curated selection of my work spanning interactive experiences, creative coding, and more.
          </p>
          
          <TagFilter
            tags={allTags}
            selectedTags={selectedTags}
            onTagChange={setSelectedTags}
            className="justify-center"
          />
        </div>
      </ScrollAnimation>

      {filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollAnimation 
              key={project.id} 
              animation="slide-up" 
              delay={index * 100}
            >
              <div 
                className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer group"
                onClick={() => openProjectModal(project.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-70" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-gray-900/60 backdrop-blur-sm text-gray-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">{project.date}</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400">No projects found with the selected tags.</p>
        </div>
      )}

      <ScrollAnimation animation="fade-in" delay={200}>
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </ScrollAnimation>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject ? getProjectById(selectedProject) : null}
        isOpen={selectedProject !== null}
        onClose={closeProjectModal}
      />
    </div>
  );
};
