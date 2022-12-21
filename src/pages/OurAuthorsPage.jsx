import React, { useEffect, useState } from "react";
import { InstantSearch, SearchBox, SortBy } from "react-instantsearch-dom";
import ProductPagination from "../components/OurAuthors/OuAuthorsPagination";
import OurAuthors from "../components/OurAuthors/OurAuthors";
import { useSetProfile } from "../contexts/SetProfileContext";
import algoliasearch from "algoliasearch/lite";
import { Box } from "@mui/material";

const searchClient = algoliasearch(
  "I9FX7TPWGQ",
  "caf8cdecddd897f40a310ea6c464bb43"
);

const OurAuthorsPage = () => {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <Box>
      <InstantSearch indexName="authors" searchClient={searchClient}>
        <div align="center" style={{ marginTop: "3%" }}>
          {" "}
          <SearchBox />
        </div>
        <OurAuthors />
      </InstantSearch>
    </Box>
  );
};

export default OurAuthorsPage;
