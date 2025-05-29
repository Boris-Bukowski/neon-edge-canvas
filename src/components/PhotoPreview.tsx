
import { useState } from "react";
import { X, Heart, Share2, Download } from "lucide-react";

export const PhotoPreview = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
      alt: "Starry night landscape",
      title: "Cosmic Dreams",
      description: "A long exposure capture of the night sky",
      likes: 156
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      alt: "Abstract technology",
      title: "Digital Circuits",
      description: "Macro photography of electronic components",
      likes: 98
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      alt: "Code on screen",
      title: "Lines of Code",
      description: "The poetry of programming",
      likes: 124
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      alt: "Colorful code",
      title: "Syntax Highlighting",
      description: "Beautiful code visualization",
      likes: 87
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      alt: "Matrix visualization",
      title: "Data Flow",
      description: "Visual representation of data streams",
      likes: 203
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
      alt: "Digital display",
      title: "Connected Screens",
      description: "Modern digital interaction",
      likes: 145
    }
  ];

  const openLightbox = (photoId: number) => {
    setSelectedPhoto(photoId);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'unset';
  };

  const selectedPhotoData = photos.find(photo => photo.id === selectedPhoto);

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Visual Stories
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Capturing moments where technology meets artistry through my lens.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-xl cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => openLightbox(photo.id)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-bold text-lg mb-1">{photo.title}</h3>
              <p className="text-sm text-gray-300">{photo.description}</p>
              <div className="flex items-center mt-2">
                <Heart size={14} className="text-pink-400 mr-1" />
                <span className="text-sm">{photo.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && selectedPhotoData && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors"
            >
              <X size={32} />
            </button>
            
            <img
              src={selectedPhotoData.src}
              alt={selectedPhotoData.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedPhotoData.title}</h3>
              <p className="text-gray-300 mb-4">{selectedPhotoData.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 hover:text-pink-400 transition-colors">
                    <Heart size={16} />
                    <span>{selectedPhotoData.likes}</span>
                  </button>
                  <button className="hover:text-cyan-400 transition-colors">
                    <Share2 size={16} />
                  </button>
                </div>
                <button className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-center mt-12">
        <button className="px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
          View Full Gallery
        </button>
      </div>
    </div>
  );
};
