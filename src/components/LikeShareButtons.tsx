
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
        className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all duration-200 ${
          isLiked 
            ? 'text-pink-400 bg-pink-400/10' 
            : 'text-gray-400 hover:text-pink-400 hover:bg-pink-400/10'
        }`}
      >
        <Heart size={16} className={isLiked ? 'fill-current' : ''} />
        <span className="text-sm font-medium">{likes}</span>
      </button>

      <div className="relative">
        <button
          onClick={() => setShowShareMenu(!showShareMenu)}
          className="flex items-center gap-2 px-3 py-1 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-full transition-all duration-200"
        >
          <Share2 size={16} />
          <span className="text-sm font-medium">Share</span>
        </button>

        {showShareMenu && (
          <div className="absolute top-full mt-2 right-0 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10 min-w-[160px]">
            <button
              onClick={copyToClipboard}
              className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            >
              <LinkIcon size={16} />
              Copy Link
            </button>
            <button
              onClick={shareOnTwitter}
              className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            >
              <Twitter size={16} />
              Twitter
            </button>
            <button
              onClick={shareOnLinkedIn}
              className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
