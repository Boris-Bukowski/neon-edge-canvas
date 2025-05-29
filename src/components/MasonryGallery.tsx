
import { useState, useEffect } from "react";
import { X, Heart, Share2, Download, ZoomIn } from "lucide-react";

interface Photo {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  likes: number;
  tags: string[];
}

interface MasonryGalleryProps {
  photos: Photo[];
}

export const MasonryGallery = ({ photos }: MasonryGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 768) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const openZoomViewer = (photo: Photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeZoomViewer = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'unset';
  };

  const distributePhotos = () => {
    const cols: Photo[][] = Array.from({ length: columns }, () => []);
    photos.forEach((photo, index) => {
      cols[index % columns].push(photo);
    });
    return cols;
  };

  const photoColumns = distributePhotos();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photoColumns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4">
            {column.map((photo) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-xl cursor-pointer bg-gray-800"
                onClick={() => openZoomViewer(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute top-4 right-4">
                    <ZoomIn className="text-white" size={20} />
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{photo.title}</h3>
                    <p className="text-sm text-gray-300 mb-2">{photo.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Heart size={14} className="text-pink-400" />
                        <span className="text-sm">{photo.likes}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {photo.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-gray-900/60 backdrop-blur-sm rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Zoom Viewer Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeZoomViewer}
              className="absolute -top-12 right-0 p-2 text-white hover:text-cyan-400 transition-colors z-10"
            >
              <X size={32} />
            </button>
            
            {/* Image */}
            <div className="relative">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-w-full max-h-[85vh] object-contain mx-auto rounded-lg"
              />
              
              {/* Photo Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white rounded-b-lg">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h3>
                    <p className="text-gray-300 mb-3">{selectedPhoto.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {selectedPhoto.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-lg hover:bg-gray-700 transition-colors">
                      <Heart size={16} />
                      <span>{selectedPhoto.likes}</span>
                    </button>
                    
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-lg hover:bg-gray-700 transition-colors">
                      <Share2 size={16} />
                      <span>Share</span>
                    </button>
                    
                    <button className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-lg hover:bg-cyan-500/30 transition-colors">
                      <Download size={16} />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
