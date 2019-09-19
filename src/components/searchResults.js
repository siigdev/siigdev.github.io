import React from 'react';
import { Link } from "gatsby"

const SearchResults = ({ results, query }) => (
  <section aria-label="Search results for all posts">
    {!!results.length && query &&
      <p
        className="search-results-count"
        id="search-results-count"
        aria-live="assertive"
      >Found {results.length} posts on search "{query}".</p>
    }
    {(results.length === 0) &&
      <p>No posts found based on search "{query}".</p>
      
    }
    {!!results.length &&
  <div className="search-results-list">
    {results.map(({
      title,
      url,
      date
    }
) => (
        <div className="blogPosts">
        <Link key={title} to={`/blog/${url}`}>
            {title}
          </Link>
        
        {date}
        </div>
    ))}
  </div>
}
  </section>
);

export default SearchResults;