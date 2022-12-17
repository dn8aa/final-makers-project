import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Profile from "../components/Profile/Profile";
import Post from "../components/WritePost/Post";
import PostComments from "../components/WritePost/PostComments";
import { useSetProfile } from "../contexts/SetProfileContext";

const PostPage = () => {
  const { email } = useParams();
  const { index } = useParams();
  //   console.log(index);
  const { profiles, getProfileDetails, profileDetails, getProfiles } =
    useSetProfile();

  const profile = profiles.find((profile) => profile.user === email);
  //   console.log(profile);

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
        mx: {
          xs: 5,
          sm: 10,
          lg: 35,
        },
        pb: 4,
      }}
    >
      {/* <Post /> */}
      <Box
        sx={{
          width: "70%",
          pt: 5,
          borderRight: "1px solid lightgrey",
          minHeight: "100vh",
        }}
      >
        {" "}
        <Post profile={profile} index={index} post={profile.posts[index]} userEmail={email} />
        <PostComments
          indexForMethod={index}
        
          post={profile.posts[index]}
          authorEmail={email}
        />
      </Box>
      <Profile profile={profile} />
    </Box>
  );
};

export default PostPage;
