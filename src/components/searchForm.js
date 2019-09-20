import React from 'react';
import { navigate } from 'gatsby';


const handleSubmit = event => {
  console.log(event.target.value)
  navigate(`/search?keywords=${encodeURIComponent(event.target.value)}`)

  event.preventDefault()
}

const SearchForm = ({ query }) => (
    <div id="searchBox">
      <form role="search" method="GET" onSubmit={(e) => {handleSubmit(e)}}>
      <span role="img" aria-label="Search" id="search-label">🔍</span>
      <input
        type="search"
        id="search-input"
        name="keywords"
        autoComplete="off"
        aria-controls="search-results-count"
        value={query}
      />
      
    </form>
    
    </div>
  );

export default SearchForm;