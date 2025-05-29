
import { useState } from "react";

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagChange: (tags: string[]) => void;
  className?: string;
}

export const TagFilter = ({ tags, selectedTags, onTagChange, className = "" }: TagFilterProps) => {
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagChange(selectedTags.filter(t => t !== tag));
    } else {
      onTagChange([...selectedTags, tag]);
    }
  };

  const clearAll = () => {
    onTagChange([]);
  };

  return (
    <div className={`flex flex-wrap gap-2 items-center ${className}`}>
      <span className="text-sm font-medium text-gray-400 mr-2">Filter:</span>
      
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => toggleTag(tag)}
          className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200 ${
            selectedTags.includes(tag)
              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-transparent'
              : 'text-gray-400 border-gray-600 hover:border-cyan-400 hover:text-cyan-400'
          }`}
        >
          {tag}
        </button>
      ))}
      
      {selectedTags.length > 0 && (
        <button
          onClick={clearAll}
          className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-white transition-colors"
        >
          Clear All
        </button>
      )}
    </div>
  );
};
