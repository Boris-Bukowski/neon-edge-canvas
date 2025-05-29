
import { X, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  date: string;
  technologies: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-gray-900/80 backdrop-blur-sm rounded-lg text-white hover:bg-gray-800 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-gray-300">{project.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">About This Project</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {project.fullDescription}
              </p>

              <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 text-cyan-400 text-sm rounded-full border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  <span className="text-sm">{project.date}</span>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <Tag size={16} />
                    <span className="text-sm">Tags</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded border border-cyan-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 w-full justify-center"
                    >
                      <ExternalLink size={16} />
                      View Live Demo
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 w-full justify-center"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
