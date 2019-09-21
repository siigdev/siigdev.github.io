import React from 'react';
import { navigate } from 'gatsby';

const SearchForm = ({ query }) => (
    <div id="searchBox">
      <form role="search" method="GET" onSubmit={(event) => {event.preventDefault()}}>
      <span role="img" aria-label="Search" id="search-label">🔍</span>
      <input 
        type="search"
        id="search-input"
        name="keywords"
        autoComplete="off"
        aria-controls="search-results-count"
        onKeyPress={(event) => {if (event.key === 'Enter') {
            navigate(`/search?keywords=${encodeURIComponent(event.target.value)}`)}}
          }
        value={query}
      />
      
    </form>
    
    </div>
  );

export default SearchForm;