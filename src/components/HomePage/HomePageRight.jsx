import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { useSetProfile } from "../../contexts/SetProfileContext";

const HomePageRight = () => {
  // useEffect(() => {
  //   getProfiles();
  // }, []);

  // // const [page, setPage] = useState(1);
  // // const itemsPerPage = 12;
  // // const count = Math.ceil(products.length / itemsPerPage);

  // // function currentData() {
  // //   const begin = (page - 1) * itemsPerPage;
  // //   const end = begin + itemsPerPage;
  // //   return products.slice(begin, end);
  // // }

  // const { getProfiles } = useSetProfile();
  // const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   getProfiles();
  //   // setPage(1);
  // }, [searchParams]);

  // const [search, setSearch] = React.useState(searchParams.get("q") || "");

  // React.useEffect(() => {
  //   setSearchParams({
  //     q: search,
  //   });
  // }, [search]);

  return (
    <Box sx={{ width: "30%", mt: 5 }}>
      <Box sx={{ pl: 5 }}>fffffffffffff</Box>
    
    </Box>
  );
};

export default HomePageRight;
