import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Profile from "../components/Profile/Profile";
import { useParams } from "react-router-dom";
import { useSetProfile } from "../contexts/SetProfileContext";
import { useAuth } from "../contexts/AuthContext";
import ProfilePosts from "../components/Profile/ProfilePosts";
const ProfilePage = () => {
  const { email } = useParams();

  const { profiles, getProfiles } = useSetProfile();

  const profile = profiles.find((profile) => profile.user === email);
  // console.log(profile);

  useEffect(() => {
    getProfiles();
  }, []);
  if (!profile) {
    return <div>loading</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column-reverse",
          md: "row",
        },

        mx: {
          xs: 5,
          sm: 15,
          md: 20,
          lg: 35,
        },
      }}
    >
      <ProfilePosts profile={profile} userEmail={email} />
      <Profile profile={profile} />
    </Box>
  );
};

export default ProfilePage;
