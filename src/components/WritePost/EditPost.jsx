import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useSetProfile } from "../../contexts/SetProfileContext";

const EditPost = () => {
  const { index } = useParams();
  const {
    user,
    user: { email },
  } = useAuth();

  const navigate = useNavigate();

  const { profiles, getProfiles, saveEditedProfile } = useSetProfile();

  const profile = profiles.find((profile) => profile.user === user.email);
  // console.log(profile);

  useEffect(() => {
    getProfiles();
  }, []);

  const [profileDetails, setProfileDetails] = useState(profile);

  useEffect(() => {
    setProfileDetails(profile);
  }, [profile]);

  //   console.log(profileDetails.posts[index]);

  // console.log(profileDetails);

  const [post, setPost] = useState({ ...profileDetails.posts[index] });

  console.log(post);

  const handleInp = (e) => {
    // console.log(e.target.value);
    let postObj = { ...post, [e.target.name]: e.target.value, user: email };
    setPost(postObj);
  };

  function changePost() {
    let newProfileDetails = { ...profileDetails };
    newProfileDetails.posts.splice(index, 1);

    newProfileDetails.posts.splice(index, 0, post);

    setProfileDetails(newProfileDetails);
  }

  if (!profile) {
    return <div>loading</div>;
  }

  // console.log(profile.posts);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        mx: {
          xs: 5,
          sm: 10,
          lg: 35,
        },
        pb: 4,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", my: 3 }}>
        <input
          value={post.title}
          onChange={handleInp}
          placeholder="title"
          name="title"
        />

        <FormControl sx={{}}>
          <Select
            name="topic"
            size="small"
            onChange={handleInp}
            defaultValue={"all"}
          >
            <MenuItem value={"all"}>all</MenuItem>
            <MenuItem value={"mentalhealth"}>mental health</MenuItem>
            <MenuItem value={"culture"}>culture</MenuItem>
            <MenuItem value={"technology"}>technology</MenuItem>

            <MenuItem value={"politics"}>politics</MenuItem>
            <MenuItem value={"travel"}>travel</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <textarea
        value={post.text}
        onChange={handleInp}
        placeholder="text"
        name="text"
        style={{ overflow: "visible", height: "300px" }}
      />

      <Button
        sx={{
          margin: "auto",
          mt: 3,
          // ml: 2,
          backgroundColor: "#90DBF4",
          color: "white",
          fontSize: 13,
          textTransform: "lowercase",
          borderRadius: "30px",
          ":hover": {
            color: "black",
          },
          width: "70%",
        }}
        onClick={() => {
          changePost();
          saveEditedProfile(profileDetails.id, profileDetails);
          console.log(profileDetails.id);
          console.log(profileDetails);
          navigate(`/profile/${email}`);
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default EditPost;
