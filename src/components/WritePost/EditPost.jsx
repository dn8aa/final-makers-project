import { Button, TextField } from "@mui/material";
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

    newProfileDetails.posts.splice(index,0,post);

    setProfileDetails(newProfileDetails);
  }

  if (!profile) {
    return <div>loading</div>;
  }

  // console.log(profile.posts);

  return (
    <Box>
      <input
        value={post.area}
        onChange={handleInp}
        placeholder="area"
        name="area"
      />

      <input
        value={post.cover}
        onChange={handleInp}
        placeholder="cover"
        name="cover"
      />
      <input
        value={post.title}
        onChange={handleInp}
        placeholder="title"
        name="title"
      />
      <input
        value={post.text}
        onChange={handleInp}
        placeholder="text"
        name="text"
        style={{ overflow: "visible", height: "fit-content" }}
      />

      <Button
        onClick={() => {
          changePost();
          saveEditedProfile(profileDetails.id, profileDetails);
          console.log(profileDetails.id);
          console.log(profileDetails);
          navigate("/profile");
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default EditPost;
