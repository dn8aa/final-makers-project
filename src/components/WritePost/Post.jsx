import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useSetProfile } from "../../contexts/SetProfileContext";

const Post = ({ profile, post, userEmail, index }) => {
  console.log(post);
  const { saveEditedProfile } = useSetProfile();

  const navigate = useNavigate();

  const {
    user: { email },
  } = useAuth();

  const [profileDetails, setProfileDetails] = useState(profile);
  useEffect(() => {
    setProfileDetails(profile);
  }, [profile]);

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
  function deletePost(index) {
    let newProfileDetails = {
      ...profile,
    };

    newProfileDetails.posts.splice(index, 1);
    setProfileDetails(newProfileDetails);
  }

  return (
    <Box>
      {email === userEmail ? (
        <Box sx={{ display: "flex",ml:'75%'  }}>
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
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <img
          width="50px"
          height="50px"
          src={profile.avatar}
          alt=""
          style={{ borderRadius: "50%", cursor: "pointer" }}
        />
        <Typography
          sx={{ ml: 1, cursor: "pointer" }}
          onClick={() => navigate(`/profile/${userEmail}`)}
        >
          {profile.username}
        </Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography
          sx={{ fontSize: 35, fontWeight: 600, fontFamily: "Playfair Display" }}
        >
          {post.title}
        </Typography>
        <Typography sx={{ fontFamily: "Playfair Display", mt: 2, mr: 5 }}>
          {post.text}
        </Typography>
      </Box>

      <Box
        sx={{ display: "flex", mt: 2 }}
        onClick={() => {
          console.log(profileDetails.posts[index].likes);
          like();
          saveEditedProfile(profile.id, profileDetails);
        }}
      >
        <Box sx={{ display: "flex", cursor: "pointer" }}>
          {" "}
          <FavoriteIcon sx={{ mr: 1 }} />
          <Typography>{post.likes?.length} likes</Typography>
        </Box>

        <Box sx={{ display: "flex", cursor: "pointer", ml: 2 }}>
          {" "}
          <ModeCommentIcon sx={{ mr: 1, ml: 2 }} />
          <Typography>{post.comments?.length} comments</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Post;
