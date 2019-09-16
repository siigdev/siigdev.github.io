import React from 'react';
import { Link } from "gatsby"

const SearchResults = ({ results, query }) => (
  <section aria-label="Search results for all posts">
    {!!results.length && query &&
      <h2
        className="search-results-count"
        id="search-results-count"
        aria-live="assertive"
      >Found {results.length} posts on "{query}"</h2>
    }
    {!!results.length &&
  <ol className="search-results-list">
    {results.map(({
      title,
      url,
      date
    }
) => (
      <li key={title}>
        <h3 className="search-results-list__heading">
        <Link to={`/blog/${url}`}>
            {title}
          </Link>
        </h3>
        <small>{(new Date(date).toLocaleString('en-GB'))}</small>
      </li>
    ))}
  </ol>
}
  </section>
);

export default SearchResults;