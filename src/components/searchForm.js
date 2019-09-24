import React from 'react';
import { navigate } from 'gatsby';
import searchicon from "../images/search-icon.svg"

const SearchForm = ({ query }) => (
    <div id="searchBox">
      <form role="search" method="GET" onSubmit={(event) => {event.preventDefault()}}>
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
        style={{backgroundImage: `url(${searchicon})`, backgroundSize:`20px 20px`, backgroundRepeat:`no-repeat`}
        }
      />
      
    </form>
    
    </div>
  );

export default SearchForm;