
import { useState } from "react";
import { Heart, Share2, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LikeShareButtonsProps {
  postId: number;
  initialLikes: number;
  title: string;
  url?: string;
}

export const LikeShareButtons = ({ postId, initialLikes, title, url }: LikeShareButtonsProps) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const { toast } = useToast();

  const handleLike = () => {
    if (isLiked) {
      setLikes(prev => prev - 1);
      setIsLiked(false);
    } else {
      setLikes(prev => prev + 1);
      setIsLiked(true);
      toast({
        title: "Thanks for the like! ❤️",
        description: "Your feedback means a lot.",
      });
    }
  };

  const copyToClipboard = () => {
    const currentUrl = url || window.location.href;
    navigator.clipboard.writeText(currentUrl);
    toast({
      title: "Link copied!",
      description: "The link has been copied to your clipboard.",
    });
    setShowShareMenu(false);
  };

  const shareOnTwitter = () => {
    const currentUrl = url || window.location.href;
    const text = `Check out "${title}"`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentUrl)}`, '_blank');
    setShowShareMenu(false);
  };

  const shareOnLinkedIn = () => {
    const currentUrl = url || window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`, '_blank');
    setShowShareMenu(false);
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleLike}
        className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all duration-300 transform hover:scale-105 ${
          isLiked 
            ? 'text-pink-400 bg-pink-400/20 shadow-lg shadow-pink-400/20' 
            : 'text-gray-400 hover:text-pink-400 hover:bg-pink-400/10'
        }`}
      >
        <Heart size={16} className={`transition-transform duration-200 ${isLiked ? 'fill-current scale-110' : ''}`} />
        <span className="text-sm font-medium">{likes}</span>
      </button>

      <div className="relative">
        <button
          onClick={() => setShowShareMenu(!showShareMenu)}
          className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all duration-300 transform hover:scale-105 ${
            showShareMenu 
              ? 'text-cyan-400 bg-cyan-400/20 shadow-lg shadow-cyan-400/20' 
              : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10'
          }`}
        >
          <Share2 size={16} className={`transition-transform duration-200 ${showShareMenu ? 'rotate-12' : ''}`} />
          <span className="text-sm font-medium">Share</span>
        </button>

        {/* Backdrop for mobile */}
        {showShareMenu && (
          <div 
            className="fixed inset-0 z-40 bg-black/20 md:hidden" 
            onClick={() => setShowShareMenu(false)}
          />
        )}

        {/* Share dropdown */}
        <div className={`
          absolute top-full mt-3 right-0 z-50 min-w-[180px] w-max
          bg-gray-800/95 backdrop-blur-lg border border-cyan-400/30
          rounded-xl shadow-2xl shadow-cyan-400/20
          transition-all duration-300 transform origin-top-right
          ${showShareMenu 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
          }
          
          /* Mobile positioning */
          md:right-0 
          max-md:right-0 max-md:left-auto
          max-md:transform max-md:-translate-x-0
        `}>
          {/* Neon glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-xl blur-sm -z-10" />
          
          {/* Arrow indicator */}
          <div className="absolute -top-2 right-6 w-4 h-4 bg-gray-800 border-l border-t border-cyan-400/30 transform rotate-45" />
          
          <div className="p-2">
            <button
              onClick={copyToClipboard}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-300 
                       hover:text-white hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-cyan-400/5
                       rounded-lg transition-all duration-200 transform hover:scale-[1.02]
                       group"
            >
              <LinkIcon size={16} className="group-hover:text-cyan-400 transition-colors duration-200" />
              <span className="font-medium">Copy Link</span>
            </button>
            
            <button
              onClick={shareOnTwitter}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-300 
                       hover:text-white hover:bg-gradient-to-r hover:from-blue-400/10 hover:to-blue-400/5
                       rounded-lg transition-all duration-200 transform hover:scale-[1.02]
                       group"
            >
              <Twitter size={16} className="group-hover:text-blue-400 transition-colors duration-200" />
              <span className="font-medium">Twitter</span>
            </button>
            
            <button
              onClick={shareOnLinkedIn}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-300 
                       hover:text-white hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-blue-600/5
                       rounded-lg transition-all duration-200 transform hover:scale-[1.02]
                       group"
            >
              <Linkedin size={16} className="group-hover:text-blue-600 transition-colors duration-200" />
              <span className="font-medium">LinkedIn</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
