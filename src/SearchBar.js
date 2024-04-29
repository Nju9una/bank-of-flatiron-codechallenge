import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search transactions..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
