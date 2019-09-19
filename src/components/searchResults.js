import React from 'react';
import { Link } from "gatsby"

const SearchResults = ({ results, query }) => (
  <section aria-label="Search results for all posts">
    {!!results.length && query &&
      <p
        className="search-results-count"
        id="search-results-count"
        aria-live="assertive"
      >Found {results.length} posts on "{query}"</p>
    }
    {(results.length == 0) &&
      <p>No posts found based on your search.</p>
      
    }
    {!!results.length &&
  <div className="search-results-list">
    {results.map(({
      title,
      url,
      date
    }
) => (
      <div key={title}>
        <div className="blogPosts">
        <Link key={title} to={`/blog/${url}`}>
            {title}
          </Link>
        
        {date}
        </div>
      </div>
    ))}
  </div>
}
  </section>
);

export default SearchResults;