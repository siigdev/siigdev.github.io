import React from 'react';
import { navigate } from 'gatsby';

const SearchForm = ({ query }) => (
    <div id="searchBox">
      <form role="search" method="GET">
      <span role="img" aria-label="Search" id="search-label">🔍</span>
      <input
        type="search"
        id="search-input"
        name="keywords"
        aria-controls="search-results-count"
        onChange={(e) => {navigate(`/search?keywords=${encodeURIComponent(e.target.value)}`)}}
        value={query}
      />
      
    </form>
    
    </div>
  );

export default SearchForm;