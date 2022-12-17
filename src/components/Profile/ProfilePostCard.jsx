import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import { useAuth } from "../../contexts/AuthContext";
import { useSetProfile } from "../../contexts/SetProfileContext";
import { useNavigate } from "react-router-dom";
const ProfilePostCard = ({ post, index, userEmail }) => {
  const {
    user: { email },
  } = useAuth();
  const navigate = useNavigate();

  const { profiles, getProfiles, saveEditedProfile } = useSetProfile();

  const profile = profiles.find((profile) => profile.user === userEmail);
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
      return newProfileDetails.posts[index].likes?.push(email);
    } else {
      let likeIndex = newProfileDetails.posts[index].likes?.indexOf(email);
      console.log(likeIndex);
      return newProfileDetails.posts[index].likes.splice(likeIndex, 1);
    }

    setProfileDetails(newProfileDetails);
  }

  // console.log(post.likes);
  return (
    <Box sx={{ borderTop: "1px solid lightgrey", py: 5 }}>
      <Box
        sx={{ display: "flex", mb: 1, justifyContent: "space-between", mr: 6 }}
      >
        <Typography>{post.date}</Typography>
        {email === userEmail ? (
          <Box sx={{ display: "flex" }}>
            {" "}
            <Button
              sx={{
                color: "",
                display: "block",
                backgroundColor: "#CDB4DB",
                textTransform: "lowercase",
                borderRadius: "30px",
                color: "white",
                ":hover": {
                  color: "black",
                },
                mr: 1,
              }}
              onClick={() => {
                deletePost(index);
                saveEditedProfile(profileDetails.id, profileDetails);
              }}
            >
              delete
            </Button>
            <Button
              sx={{
                color: "",
                display: "block",
                backgroundColor: "#CDB4DB",
                textTransform: "lowercase",
                borderRadius: "30px",
                color: "white",
                ":hover": {
                  color: "black",
                },
              }}
              onClick={() => {
                navigate(`/editpost/${index}`);
              }}
            >
              edit
            </Button>
          </Box>
        ) : (
          <></>
        )}
      </Box>
      <Typography
        sx={{
          fontSize: 30,
          fontWeight: 600,
          fontFamily: "Playfair Display",
          mr: 3,
          display: "block",
          wordWrap: "break-word",
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
            console.log(profileDetails.posts[index].likes);
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

export default ProfilePostCard;
