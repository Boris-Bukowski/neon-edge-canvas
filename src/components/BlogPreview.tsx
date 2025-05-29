
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { TagFilter } from "./TagFilter";
import { LikeShareButtons } from "./LikeShareButtons";
import { ScrollAnimation } from "./ScrollAnimation";

export const BlogPreview = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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
    },
    {
      id: 4,
      title: "Machine Learning for Designers",
      excerpt: "Understanding how machine learning can enhance design workflows and creative processes.",
      date: "2024-02-28",
      readTime: "7 min read",
      tags: ["AI", "Design", "Machine Learning"],
      likes: 56
    },
    {
      id: 5,
      title: "The Art of Microinteractions",
      excerpt: "Small details that make a big difference in user experience and interface design.",
      date: "2024-02-20",
      readTime: "4 min read",
      tags: ["UX", "Animation", "UI/UX"],
      likes: 33
    },
    {
      id: 6,
      title: "WebGL and Three.js Mastery",
      excerpt: "Creating stunning 3D experiences on the web with modern JavaScript libraries.",
      date: "2024-02-15",
      readTime: "10 min read",
      tags: ["Web Dev", "3D", "Creative Coding"],
      likes: 67
    }
  ];

  // Get all unique tags
  const allTags = Array.from(new Set(blogs.flatMap(blog => blog.tags)));

  // Filter blogs based on selected tags
  const filteredBlogs = selectedTags.length > 0 
    ? blogs.filter(blog => blog.tags.some(tag => selectedTags.includes(tag)))
    : blogs;

  return (
    <div className="container mx-auto px-6">
      <ScrollAnimation animation="fade-in">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Latest Thoughts
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Insights, tutorials, and reflections on technology, creativity, and the intersection of both.
          </p>
          
          <TagFilter
            tags={allTags}
            selectedTags={selectedTags}
            onTagChange={setSelectedTags}
            className="justify-center"
          />
        </div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog, index) => (
          <ScrollAnimation
            key={blog.id}
            animation="slide-up"
            delay={index * 100}
          >
            <article className="group bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
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

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-4">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
              
              <LikeShareButtons
                postId={blog.id}
                initialLikes={blog.likes}
                title={blog.title}
              />
            </article>
          </ScrollAnimation>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No posts found with the selected tags.</p>
        </div>
      )}

      <ScrollAnimation animation="fade-in" delay={200}>
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
            View All Posts
          </button>
        </div>
      </ScrollAnimation>
    </div>
  );
};
