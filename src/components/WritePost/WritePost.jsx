import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useSetProfile } from "../../contexts/SetProfileContext";

const WritePost = () => {
  const {
    user,
    user: { email },
  } = useAuth();

  const { profiles, getProfiles, saveEditedProfile } = useSetProfile();
  const navigate = useNavigate();

  const profile = profiles.find((profile) => profile.user === user.email);
  // console.log(profile);

  useEffect(() => {
    getProfiles();
  }, []);

  //!writing post

  const [profileDetails, setProfileDetails] = useState(profile);

  useEffect(() => {
    setProfileDetails(profile);
  }, [profile]);

  const getDate = () => {
    let date = new Date();
    date =
      date.getDate().toString() +
      "." +
      date.getMonth().toString() +
      "." +
      date.getFullYear().toString();

    return date;
  };

  // console.log(profileDetails);

  const [post, setPost] = useState({
    title: "",
    text: "",
    comments: [],
    user: "",
    likes: [],
    reads: 0,
    timestamp: "",
    topic: "",
  });

  const handleInp = (e) => {
    // console.log(e.target.value);
    let postObj = {
      ...post,
      [e.target.name]: e.target.value,
      user: email,
      avatar: profile.avatar,
      username: profile.username,
      date: getDate(),
    };
    setPost(postObj);
  };

  function submitPost() {
    let newProfileDetails = { ...profileDetails };
    newProfileDetails.posts.push(post);

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
        <input onChange={handleInp} placeholder="title" name="title" />

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
          navigate(`/profile/${email}`);
          submitPost();
          saveEditedProfile(profileDetails.id, profileDetails);
          console.log(profileDetails.id);
          console.log(profileDetails);
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default WritePost;
