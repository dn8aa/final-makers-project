import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useSetProfile } from "../../contexts/SetProfileContext";
import fire from "../../fire";

const EditProfile = () => {
  const {
    user: { email },
  } = useAuth();
  const navigate = useNavigate();

  const { saveEditedProfile, profiles, getProfiles } = useSetProfile();

  const { id } = useParams();

  const profile = profiles.find((profile) => profile.user === email);
  // console.log(profile);

  const [editedProfile, setEditedProfile] = useState(profile);

  useEffect(() => {
    setEditedProfile(profile);
  }, [profile]);

  //!writing post

  const handleInp = (e) => {
    let newProfile = { ...editedProfile, [e.target.name]: e.target.value };
    setEditedProfile(newProfile);
  };

  if (!profile) {
    return <div>loading</div>;
  }

  // console.log(email);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", width: "30%", mt: 6 }}
      >
        <TextField
          value={editedProfile.avatar}
          onChange={handleInp}
          name="avatar"
          sx={{ my: 1 }}
          placeholder="photo url"
        />
        <TextField
          value={editedProfile.aboutuser}
          onChange={handleInp}
          name="aboutuser"
          sx={{ my: 1 }}
          placeholder="about you"
        />
        <TextField
          value={editedProfile.username}
          onChange={handleInp}
          name="username"
          sx={{ my: 1 }}
          placeholder="username"
        />
        <Button
          type="button"
          onClick={() => {
            saveEditedProfile(id, editedProfile);
            navigate("/");
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
          Save Edit
        </Button>
      </Box>
    </Box>
  );
};

export default EditProfile;
