import React, { useEffect, useState } from "react";
import { InstantSearch, SearchBox, SortBy } from "react-instantsearch-dom";
import ProductPagination from "../components/OurAuthors/OuAuthorsPagination";
import OurAuthors from "../components/OurAuthors/OurAuthors";
import { useSetProfile } from "../contexts/SetProfileContext";
import algoliasearch from "algoliasearch/lite";

const searchClient = algoliasearch(
  "I9FX7TPWGQ",
  "caf8cdecddd897f40a310ea6c464bb43"
);

const OurAuthorsPage = () => {
  function refreshPage() {
    window.location.reload(false);
  }

  // useEffect(() => {
  //   refreshPage();
  // }, []);
  //   const { profiles, getProfiles } = useSetProfile();

  //   useEffect(() => {
  //     getProfiles();
  //   }, []);
  //   const [page, setPage] = useState(1);
  //   const itemsPerPage = 12;
  //   const count = Math.ceil(profiles.length / itemsPerPage);

  //   function currentData() {
  //     const begin = (page - 1) * itemsPerPage;
  //     const end = begin + itemsPerPage;
  //     return profiles.slice(begin, end);
  //   }

  return (
    <div>
      <InstantSearch indexName="authors" searchClient={searchClient}>
        <SortBy
          defaultRefinement="authors"
          items={[
            { value: "authors", label: "Featured" },
            { value: "authors_score_asc", label: "Price asc." },
            { value: "authors_score_desc", label: "Price desc." },
          ]}
        />
        <SearchBox />
        <OurAuthors />
      </InstantSearch>

      {/* <ProductPagination page={page} setPage={setPage} count={count} /> */}
    </div>
  );
};

export default OurAuthorsPage;
