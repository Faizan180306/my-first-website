import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex justify-center my-6 px-4">
      <div className="relative w-full md:w-1/2">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
        <input
          type="text"
          placeholder="Search books by title or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default SearchBar;
