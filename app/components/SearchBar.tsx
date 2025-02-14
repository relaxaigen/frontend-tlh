'use client';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const SearchBar = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="w-full max-w-3xl mx-auto px-4 relative z-10"
    >
      <div className="relative mt-24 mb-8">
        <div className="relative bg-white rounded-lg shadow-sm">
          <div className="flex items-center px-4 py-2">
            <Search className="w-5 h-5 text-blue-700" />
            <input
              type="text"
              placeholder="Search for libraries near you..."
              className="w-full px-4 py-2 bg-transparent border-none outline-none text-gray-800 placeholder-gray-400"
            />
            <button className="px-6 py-2 bg-blue-700 text-white rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-800">
              Search
            </button>
          </div>
          <div className="px-4 py-2 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Nearby:</span>
              {['City Central Library', 'University Library', 'Community Library', 'Public Library'].map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 text-blue-700 hover:bg-blue-50 rounded-full transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchBar;
