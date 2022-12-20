import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useSetProfile } from "../../contexts/SetProfileContext";

const WritePost = () => {
  const {
    user,
    user: { email },
  } = useAuth();

  const { profiles, getProfiles, saveEditedProfile } = useSetProfile();

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
    cover: "",
    user: "",
    likes: [],
    reads: 0,
    timestamp: "",
    id: new Date(),
    topic: "",
    premium: true,
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
    <Box>
      <input onChange={handleInp} placeholder="cover" name="cover" />
      <input onChange={handleInp} placeholder="title" name="title" />
      <input
        onChange={handleInp}
        placeholder="text"
        name="text"
        style={{ overflow: "visible", height: "fit-content" }}
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
      <FormControl sx={{}}>
        <Select
          name="premium"
          size="small"
          onChange={handleInp}
          defaultValue={"public"}
        >
          <MenuItem value={"public"}>public</MenuItem>
          <MenuItem value={"member"}>member only</MenuItem>
        </Select>
      </FormControl>

      <Button
        onClick={() => {
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
