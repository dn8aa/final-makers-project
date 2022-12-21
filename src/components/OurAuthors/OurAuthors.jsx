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
import {
  Configure,
  Hits,
  Pagination,
  RefinementList,
} from "react-instantsearch-dom";

const OurAuthors = () => {
  const { profiles, getProfiles, sortData } = useSetProfile();

  console.log(profiles);

  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        mx: {
          xs: 5,
          sm: 10,
          lg: 65,
        },
        pb: 4,
        mb: 5,
      }}
    >
      <Box
        sx={{
          width: "100%",
          pt: 5,
          minHeight: "100vh",
        }}
      >
        <Typography
          sx={{
            color: "#231F20",
            fontSize: 26,
            borderBottom: "2px solid violet",
            textAlign: "center",
          }}
        >
          Our Authors You Can Follow
        </Typography>
        <Configure hitsPerPage={6} />

        <Box sx={{ width: "fit-content", display: "block", margin: "auto" }}>
          <Pagination className="pagination" />
        </Box>
        <Box sx={{ height: "fit-content" }}>
          {" "}
          <Hits id="hit" hitComponent={AuthorsCard} />
        </Box>
      </Box>
    </Box>
  );
};

export default OurAuthors;
