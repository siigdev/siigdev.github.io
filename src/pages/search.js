import React from 'react';
import Layout from "../components/layout"
import SearchForm from "../components/searchForm"
import SearchResults from "../components/searchResults"

const SearchPage = ({
    data, location
}) => (
    <Layout>
    <SearchForm />
    <SearchResults />
  </Layout>
);

export default SearchPage;