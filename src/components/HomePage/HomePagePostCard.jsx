import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import { useAuth } from "../../contexts/AuthContext";
import { useSetProfile } from "../../contexts/SetProfileContext";
import { useNavigate } from "react-router-dom";

const HomePagePostCard = ({ post, index, findUser }) => {
  const {
    user: { email },
  } = useAuth();
  const navigate = useNavigate();

  const { profiles, getProfiles, saveEditedProfile } = useSetProfile();

  const profile = profiles.find((profile) => profile.user === post.user);
  // console.log(profile);

  useEffect(() => {
    getProfiles();
  }, []);

  //!writing post

  const [profileDetails, setProfileDetails] = useState(profile);

  useEffect(() => {
    setProfileDetails(profile);
  }, [profile]);

  function deletePost(index) {
    let newProfileDetails = {
      ...profile,
    };

    newProfileDetails.posts.splice(index, 1);
    setProfileDetails(newProfileDetails);
  }

  function like() {
    let newProfileDetails = { ...profileDetails };

    if (newProfileDetails.posts[index].likes?.includes(email) != true) {
      newProfileDetails.posts[index].likes?.push(email);
    } else {
      let likeIndex = newProfileDetails.posts[index].likes?.indexOf(email);
      console.log(likeIndex);
      newProfileDetails.posts[index].likes.splice(likeIndex, 1);
    }

    setProfileDetails(newProfileDetails);
  }

  return (
    <Box sx={{ borderTop: "1px solid lightgrey", py: 5 }}>
      <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
        <img
          width="50px"
          height="50px"
          src={findUser?.avatar}
          alt=""
          style={{ borderRadius: "50%", cursor: "pointer" }}
        />
        <Typography
          sx={{ ml: 1, cursor: "pointer" }}
          onClick={() => navigate(`/profile/${post.user}`)}
        >
          {findUser?.username}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: 30,
          fontWeight: 600,
          fontFamily: "Playfair Display",
          mr: 3,
          display: "block",
        }}
      >
        {post.title}
      </Typography>
      <Typography
        sx={{
          mt: 2,
          height: "140px",
          overflow: "hidden",
          mr: 3,
          fontFamily: "Playfair Display",
        }}
      >
        {post.text}
      </Typography>
      <Typography
        sx={{
          textAlign: "left",
          mt: 2,
          color: "#E98A15",
          cursor: "pointer",
          ":hover": { color: "#449DD1" },
        }}
        onClick={() => {
          console.log(post.user);
          navigate(`/post/${post.user}/${index}`);
        }}
      >
        read more
      </Typography>
      <Box sx={{ display: "flex", mt: 2 }}>
        <Box
          onClick={() => {
            console.log(post.likes);
            console.log(profileDetails);
            like();
            saveEditedProfile(profile.id, profileDetails);
          }}
          sx={{ display: "flex", cursor: "pointer" }}
        >
          {" "}
          <FavoriteIcon sx={{ mr: 1 }} />
          <Typography>{post.likes?.length} likes</Typography>
        </Box>

        <Box
          onClick={() => navigate(`/post/${post.user}/${index}`)}
          sx={{ display: "flex", cursor: "pointer", ml: 2 }}
        >
          {" "}
          <ModeCommentIcon sx={{ mr: 1 }} />
          <Typography>{post.comments?.length} comments</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePagePostCard;
