
import { ExternalLink, Heart, Share2 } from "lucide-react";

export const BlogPreview = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of Creative Coding",
      excerpt: "Exploring how AI and creative coding are reshaping digital art and interactive experiences.",
      date: "2024-03-15",
      readTime: "5 min read",
      tags: ["Creative Coding", "AI", "Digital Art"],
      likes: 42
    },
    {
      id: 2,
      title: "Building Immersive Web Experiences",
      excerpt: "A deep dive into modern web technologies and how they enable next-level user interactions.",
      date: "2024-03-10",
      readTime: "8 min read",
      tags: ["Web Dev", "UX", "Innovation"],
      likes: 38
    },
    {
      id: 3,
      title: "Design Systems in the Modern Era",
      excerpt: "How to create scalable design systems that adapt to the ever-changing digital landscape.",
      date: "2024-03-05",
      readTime: "6 min read",
      tags: ["Design", "Systems", "UI/UX"],
      likes: 29
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Latest Thoughts
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Insights, tutorials, and reflections on technology, creativity, and the intersection of both.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <article 
            key={blog.id}
            className="group bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ExternalLink className="text-gray-500 group-hover:text-cyan-400 transition-colors" size={16} />
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
              {blog.title}
            </h3>
            
            <p className="text-gray-400 mb-4 line-clamp-3">
              {blog.excerpt}
            </p>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-1 hover:text-pink-400 transition-colors">
                  <Heart size={14} />
                  <span>{blog.likes}</span>
                </button>
                <button className="hover:text-cyan-400 transition-colors">
                  <Share2 size={14} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
          View All Posts
        </button>
      </div>
    </div>
  );
};
