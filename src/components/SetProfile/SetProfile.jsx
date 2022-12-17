import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useSetProfile } from "../../contexts/SetProfileContext";
import fire from "../../fire";

const SetProfile = () => {
  
  const navigate = useNavigate();

  // var user = fire.auth().currentuser;

  // console.log(user.email)
  const {
    user: { email },
  } = useAuth();

  // const [userEmail, setuserEmail] = useState();

  // useEffect(() => {
  //   setuserEmail(email);
  //   console.log(userEmail);
  // }, [email]);

  // console.log(userEmail);

  const { createProfile, profiles } = useSetProfile();

  // useEffect(() => {
  //   getProfiles();
  // }, []);
  const [profile, setProfile] = useState({
    user: "",
    aboutuser: "",
    avatar: "",
    followers: 0,
    following: 0,
    posts: [],
    rating: {},
    premium:false
  });

  const handleInp = (e) => {
    console.log(e.target.value);
    let obj = { ...profile, [e.target.name]: e.target.value, user: email };
    setProfile(obj);
  };

  // console.log(email);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", width: "30%", mt: 6 }}
      >
        <TextField
          onChange={handleInp}
          name="avatar"
          sx={{ my: 1 }}
          placeholder="photo url"
        />
        <TextField
          onChange={handleInp}
          name="aboutuser"
          sx={{ my: 1 }}
          placeholder="about you"
        />
        <TextField
          onChange={handleInp}
          name="username"
          sx={{ my: 1 }}
          placeholder="username"
        />
        <Button
          type="button"
          onClick={() => {
            createProfile(profile);
           
            navigate("/");

            console.log(profiles);
          }}
          size="medium"
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            fontWeight: 600,
            backgroundColor: "black",
            ":hover": {
              backgroundColor: "white",
              border: "1px solid green",
              color: "green",
              boxShadow: "none",
            },
            p: 2,
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default SetProfile;
