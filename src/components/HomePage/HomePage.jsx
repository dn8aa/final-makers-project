import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useSetProfile } from "../../contexts/SetProfileContext";
import HomePagePosts from "./HomePagePosts";
import HomePageRight from "./HomePageRight";

const HomePage = () => {
  // function refreshPage() {
  //   window.location.reload(false);
  // }

  const { profiles, getProfiles } = useSetProfile();

  useEffect(() => {
    getProfiles();
  }, []);

  console.log(profiles);

  if (!profiles) {
    return <div>loading</div>;
  }

  //   refreshPage();

  //   useEffect(() => {
  //     refreshPage();
  //   }, []);
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
      <HomePagePosts profiles={profiles} />
    </Box>
  );
};

export default HomePage;


