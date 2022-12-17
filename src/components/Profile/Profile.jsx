import React, { useEffect, useState } from "react";

import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { useSetProfile } from "../../contexts/SetProfileContext";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = ({ profile, userEmail }) => {
  const navigate = useNavigate();
  const {
    user: { email },
  } = useAuth();

  const { saveEditedProfile, profiles, getProfiles } = useSetProfile();

  //! first profile

  const [profileDetails, setProfileDetails] = useState(profile);
  useEffect(() => {
    setProfileDetails(profile);
  }, [profile]);

  // console.log(profileDetails);

  //! second profile

  const userProfile = profiles.find((profile) => profile.user === email);
  // console.log(userProfile);

  useEffect(() => {
    getProfiles();
  }, []);

  const [userProfileDetails, setUserProfileDetails] = useState(userProfile);
  useEffect(() => {
    setUserProfileDetails(userProfile);
  }, [userProfile]);

  // console.log(userProfileDetails);

  if (!userProfile) {
    return <div>loading</div>;
  }

  function follow() {
    let newProfileDetails = { ...profileDetails };
    let newUserProfileDetails = { ...userProfileDetails };

    if (
      newProfileDetails.followers.includes(email) != true &&
      newUserProfileDetails.following.includes(profile.email) != true
    ) {
      console.log("not following");
      newProfileDetails.followers.push(email);
      newUserProfileDetails.following.push(profile.user);
      setProfileDetails(newProfileDetails);
      setUserProfileDetails(newUserProfileDetails);

      saveEditedProfile(profile.id, profileDetails);
      saveEditedProfile(userProfile.id, userProfileDetails);
    } else {
      let indexOfProfile = newProfileDetails.followers.indexOf(email);

      newProfileDetails.followers.splice(indexOfProfile, 1);
      console.log(newProfileDetails.followers);

      let indexOfUserProfile = newUserProfileDetails.following.indexOf(
        profile.user
      );
      console.log(indexOfUserProfile);
      newUserProfileDetails.following.splice(indexOfUserProfile, 1);

      setProfileDetails(newProfileDetails);
      setUserProfileDetails(newUserProfileDetails);

      saveEditedProfile(profile.id, profileDetails);
      saveEditedProfile(userProfile.id, userProfileDetails);
    }

    console.log(newProfileDetails.followers);
    console.log(newUserProfileDetails.following);
  }

  function renderFollowButton() {
    if (email != profile.user) {
      return profile.followers?.includes(email) == true ? (
        <>
          {" "}
          <Typography
            onClick={() => {
              follow();
            }}
            sx={{
              mt: 2,
              width: "fit-content",
              color: "#E98A15",
              cursor: "pointer",
              ":hover": { color: "black" },
            }}
          >
            unfollow
          </Typography>
        </>
      ) : (
        <Typography
          onClick={() => {
            follow();
          }}
          sx={{
            mt: 2,
            width: "fit-content",
            color: "#a7c957",
            cursor: "pointer",
            ":hover": { color: "black" },
          }}
        >
          follow
        </Typography>
      );
    }
  }

  return (
    <Box sx={{ width: "30%", mt: 5 }}>
      <Box sx={{ pl: 5 }}>
        <Button
          sx={{
            width: "100%",

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
        >
          {" "}
          Get unlimited access
        </Button>

        <img
          src={profile.avatar}
          alt=""
          width="100px"
          height="100px"
          style={{ borderRadius: "50%", marginTop: "10%" }}
        />

        <Typography
          onClick={() => navigate(`profile/${profile.user}`)}
          sx={{ my: 1 }}
        >
          {profile.username}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              width: "fit-content",
              color: "#373F47",
              cursor: "pointer",
              ":hover": { color: "black" },
            }}
          >
            {profile.followers?.length} followers
          </Typography>

          <Typography
            sx={{
              width: "fit-content",
              color: "#373F47",
              cursor: "pointer",
              ":hover": { color: "black" },
              ml: 3,
            }}
          >
            {profile.following?.length} following
          </Typography>
        </Box>

        {renderFollowButton()}

        {email == profile.user ? (
          <Typography
            onClick={() => navigate(`/editprofile/${profile.id}`)}
            sx={{
              width: "fit-content",
              color: "#E98A15",
              cursor: "pointer",
              ":hover": { color: "black" },
              my: 2,
            }}
          >
            edit profile
          </Typography>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default Profile;
