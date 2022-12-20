import {
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSetProfile } from "../../contexts/SetProfileContext";
import HomePageRight from "../HomePage/HomePageRight";
import AuthorsCard from "./AuthorsCard";
import { query, orderBy, limit } from "firebase/firestore";
import { Configure, Hits, Pagination, RefinementList } from "react-instantsearch-dom";

const OurAuthors = () => {
  //   const q = query(citiesRef, orderBy("followers"), limit(3));
  const { profiles, getProfiles, sortData } = useSetProfile();

  console.log(profiles);

  //   const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
      getProfiles();
      // setPage(1);
    }, []);

  //   const [search, setSearch] = React.useState(searchParams.get("q") || "");

  //   React.useEffect(() => {
  //     setSearchParams({
  //       q: search,
  //     });
  //   }, [search]);

  return (
    <Box
      sx={{
        display: "flex",
        mx: {
          xs: 5,
          sm: 10,
          lg: 35,
        },
        pb: 4,
      }}
    >
      <Box
        sx={{
          width: "70%",
          pt: 5,
          borderRight: "1px solid lightgrey",
          minHeight: "100vh",
        }}
      >
        <FormControl
          sx={{ mr: "auto", width: { xs: "75%", sm: "60%" }, ml: 3 }}
        >
          <Select
            size="small"
            // onChange={(e) => fetchByParams("_sort", e.target.value)}
            defaultValue={"all"}
            inputProps={{
              name: "sort",
            }}
          >
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem onClick={() => sortData()} value={"asc"}>least popular first</MenuItem>
            <MenuItem value={"desc"}>most popular first</MenuItem>
          </Select>
        </FormControl>
        {/* <Box sx={{ width: { xs: "100%", sm: "100%" }, mt: { xs: 2, sm: 0 } }}>
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="find item"
            sx={{ ml: 3, width: { xs: "75%", sm: "60%" } }}
            size="small"
          />
          <SearchIcon onClick={() => {}} sx={{ m: 1, cursor: "pointer" }} n />
        </Box> */}
        <Typography
          sx={{
            color: "#231F20",
            fontSize: 26,
            borderBottom: "2px solid violet",
          }}
        >
          Our Authors You Can Follow
        </Typography>
        <Configure hitsPerPage={5} />
        <RefinementList attribute="username" />

        <Hits id="hit" hitComponent={AuthorsCard} />
        {/* {profiles.map((profile, index) => (
          <AuthorsCard profile={profile} key={index} />
        ))} */}
        <Pagination className='pagination'/>
      </Box>
      <HomePageRight />
    </Box>
  );
};

export default OurAuthors;
