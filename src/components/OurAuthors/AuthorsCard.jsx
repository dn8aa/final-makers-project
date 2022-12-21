import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styled from "@emotion/styled";
import { useAuth } from "../../contexts/AuthContext";
import { useSetProfile } from "../../contexts/SetProfileContext";

const AuthorsCard = (props, { profile }) => {
  const {
    user: { email },
    handleLogout,
  } = useAuth();

  const { saveEditedProfile, profiles, getProfiles, deleteProfile } =
    useSetProfile();

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

  //   console.log(userProfile);
  const [userProfileDetails, setUserProfileDetails] = useState(userProfile);
  useEffect(() => {
    setUserProfileDetails(userProfile);
  }, [userProfile]);
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

  function follow() {
    let newProfileDetails = { ...profileDetails };
    let newUserProfileDetails = { ...userProfileDetails };

    if (
      newProfileDetails.followers?.includes(email) != true &&
      newUserProfileDetails.following?.includes(props.hit.email) != true
    ) {
      console.log("not following");
      newProfileDetails.followers?.push(email);
      newUserProfileDetails.following.push(props.hit.user);
      setProfileDetails(newProfileDetails);
      setUserProfileDetails(newUserProfileDetails);

      saveEditedProfile(props.hit.id, profileDetails);
      saveEditedProfile(userProfile.id, userProfileDetails);
    } else {
      let indexOfProfile = newProfileDetails.followers?.indexOf(email);

      newProfileDetails.followers.splice(indexOfProfile, 1);
      console.log(newProfileDetails.followers);

      let indexOfUserProfile = newUserProfileDetails.following.indexOf(
        [props.hit].user
      );
      console.log(indexOfUserProfile);
      newUserProfileDetails.following.splice(indexOfUserProfile, 1);

      setProfileDetails(newProfileDetails);
      setUserProfileDetails(newUserProfileDetails);

      saveEditedProfile(props.hit.id, profileDetails);
      saveEditedProfile(userProfile.id, userProfileDetails);
    }

    console.log(newProfileDetails.followers);
    console.log(newUserProfileDetails.following);
  }

  const navigate = useNavigate();

  if (!userProfile) {
    return <div>loading</div>;
  }

  return (
    <Box
      sx={{
        m: 3,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
      <Box
        onClick={() => navigate(`/profile/${props.hit.user}`)}
        sx={{ cursor: "pointer", width: "50%" }}
      >
        {" "}
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <img
            width="80px"
            height="80px"
            style={{ borderRadius: "50%", cursor: "pointer" }}
            src={props.hit.avatar}
            alt="avatar"
          />
          <Box sx={{ ml: 2 }}>
            <Typography sx={{ cursor: "pointer", fontSize: 18 }}>
              {props.hit.username}
            </Typography>
            <Typography> {props.hit.aboutuser}</Typography>
          </Box>
        </Box>
      </Box>
      {email != props.hit.user ? (
        <></>
      ) : (
        <Box sx={{ ml: "10%" }}>your profile</Box>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
        }}
      >
        {" "}
        <Typography>followers {props.hit.followers.length}</Typography>
        <StyledRating
          readOnly
          name="customized-color"
          defaultValue={props.hit.rating.score}
          getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
      </Box>
    </Box>
  );
};

export default AuthorsCard;
