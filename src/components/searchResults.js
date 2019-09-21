import React from 'react';
import { Link } from "gatsby"

const SearchResults = ({ results, query }) => (
  <section aria-label="Search results for all posts">
    {!!results.length && query &&
      <p
        className="search-results-count"
        id="search-results-count"
        aria-live="polite"
      >Found {results.length} posts on search "{query}".</p>
    }
    {(results.length === 0) &&
      <p>No posts found on search "{query}".</p>
      
    }
    {!!results.length &&
  <ol className="search-results-list">
    {results.map(({
      title,
      url,
      date
    }
) => (
        <li key={title} className="blogPosts">
        <Link key={title} to={`/blog/${url}`}>
            {title}
          </Link>
        
        {date}
        </li>
    ))}
  </ol>
}
  </section>
);

export default SearchResults;