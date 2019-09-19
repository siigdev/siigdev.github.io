import React from 'react';
import { navigate } from 'gatsby';

const SearchForm = ({ query }) => (
    <form role="search" method="GET">
      <input
        type="search"
        id="search-input"
        name="keywords"
        aria-controls="search-results-count"
        onChange={(e) => navigate(`/search?keywords=${encodeURIComponent(e.target.value)}`)}
        value={query}
      />
    </form>
  );

export default SearchForm;