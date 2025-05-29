
import { useState } from "react";
import { MasonryGallery } from "./MasonryGallery";
import { TagFilter } from "./TagFilter";
import { ScrollAnimation } from "./ScrollAnimation";

export const PhotoPreview = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
      alt: "Starry night landscape",
      title: "Cosmic Dreams",
      description: "A long exposure capture of the night sky revealing the beauty of our universe",
      likes: 156,
      tags: ["Astrophotography", "Night", "Landscape"]
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      alt: "Abstract technology",
      title: "Digital Circuits",
      description: "Macro photography of electronic components showcasing the beauty of technology",
      likes: 98,
      tags: ["Technology", "Macro", "Abstract"]
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      alt: "Code on screen",
      title: "Lines of Code",
      description: "The poetry of programming captured in elegant syntax highlighting",
      likes: 124,
      tags: ["Programming", "Tech", "Code"]
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      alt: "Colorful code",
      title: "Syntax Highlighting",
      description: "Beautiful code visualization with vibrant colors and clean typography",
      likes: 87,
      tags: ["Programming", "Design", "Code"]
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      alt: "Matrix visualization",
      title: "Data Flow",
      description: "Visual representation of data streams in the digital matrix",
      likes: 203,
      tags: ["Abstract", "Data", "Technology"]
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
      alt: "Digital display",
      title: "Connected Screens",
      description: "Modern digital interaction and multi-screen experiences",
      likes: 145,
      tags: ["Technology", "Screens", "Digital"]
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop",
      alt: "Yellow lights between trees",
      title: "Urban Glow",
      description: "City lights filtering through nature creating magical moments",
      likes: 178,
      tags: ["Urban", "Night", "Lights"]
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
      alt: "MacBook with code",
      title: "Creative Workspace",
      description: "A developer's workspace where ideas come to life",
      likes: 92,
      tags: ["Workspace", "Programming", "Lifestyle"]
    }
  ];

  // Get all unique tags
  const allTags = Array.from(new Set(photos.flatMap(photo => photo.tags)));

  // Filter photos based on selected tags
  const filteredPhotos = selectedTags.length > 0 
    ? photos.filter(photo => photo.tags.some(tag => selectedTags.includes(tag)))
    : photos;

  return (
    <div className="container mx-auto px-6">
      <ScrollAnimation animation="fade-in">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Visual Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Capturing moments where technology meets artistry through my lens.
          </p>
          
          <TagFilter
            tags={allTags}
            selectedTags={selectedTags}
            onTagChange={setSelectedTags}
            className="justify-center"
          />
        </div>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in" delay={200}>
        <MasonryGallery photos={filteredPhotos} />
      </ScrollAnimation>

      {filteredPhotos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No photos found with the selected tags.</p>
        </div>
      )}

      <ScrollAnimation animation="fade-in" delay={300}>
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
            View Full Gallery
          </button>
        </div>
      </ScrollAnimation>
    </div>
  );
};
