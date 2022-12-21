import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button, Rating, Typography } from "@mui/material";
import { useSetProfile } from "../../contexts/SetProfileContext";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Profile = ({ profile, userEmail }) => {
  const navigate = useNavigate();
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

  const [userProfileDetails, setUserProfileDetails] = useState(userProfile);
  useEffect(() => {
    setUserProfileDetails(userProfile);
  }, [userProfile]);

  // console.log(userProfileDetails);

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

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

  useEffect(() => {
    rating();
  }, []);

  const [value, setValue] = useState(rating() || 0);

  function rating() {
    let sum = profile.rating?.ratings?.reduce((a, b) => a + b);
    return sum / profile.rating?.ratings?.length;
  }

  if (!profile.rating.ratings) {
    console.log("no");
  }

  function rate() {
    let newProfile = { ...profileDetails };
    if (
      !newProfile.rating.ratings &&
      !newProfile.rating.users &&
      !newProfile.rating.score
    ) {
      newProfile.rating.ratings = [];
      newProfile.rating.users = [];
      newProfile.rating.score = 0;
    }

    if (newProfile.rating.users.includes(email) != true) {
      newProfile.rating.ratings.push(value);
      newProfile.rating.users.push(email);
      newProfile.rating.score = rating();
    } else {
      
      let index = newProfile.rating.users.indexOf(email);
      console.log(index);
      newProfile.rating.ratings.splice(index, 1, value);
      newProfile.rating.score = rating();
     
    }

    setProfileDetails(newProfile);
    saveEditedProfile(profile.id, profileDetails);
    console.log(newProfile);
  }

  // useEffect(() => {
  //   rate();
  // }, []);
  // function rate() {
  //   let newProfile = { ...profileDetails };
  //   newProfile.rating.ratings = [];
  //   newProfile.rating.users = [];
  //   console.log(newProfile.rating.ratings);
  //   console.log(newProfile.rating.users);
  //   newProfile.rating.users.push(email);
  //   newProfile.rating.ratings.push(value);
  //   console.log(newProfile.rating.ratings);
  //   console.log(newProfile.rating.users);

  //   setProfileDetails(newProfile);
  //   saveEditedProfile(profile.id, profileDetails);
  //   ratingCount();
  // }

  console.log(value);

  if (!userProfile) {
    return <div>loading</div>;
  }

  return (
    <Box sx={{ width: "30%", mt: 5 }}>
      <Box sx={{ pl: 5 }}>
        {/* <Button
          sx={{
            width: "100%",

            color: "",
            display: "block",
            backgroundColor: "#CDB4DB",
            textTransform: "lowercase",
            borderRadius: "30px",
            color: "white",
            ":hover": {
              color: "#F1C0E8",
            },
          }}
        >
          {" "}
          Get unlimited access
        </Button> */}

        <img
          src={profile.avatar}
          alt=""
          width="100px"
          height="100px"
          style={{ borderRadius: "50%", marginTop: "10%" }}
        />

        <Typography
          onClick={() => navigate(`/profile/${profile.user}`)}
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

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <StyledRating
            sx={{ mt: 3 }}
            name="customized-color"
            defaultValue={value}
            getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />

          {profile.rating.users?.includes(email) ? (
            <Button
              sx={{
                mt: 3,
                ml: 2,
                backgroundColor: "#90DBF4",
                color: "white",
                fontSize: 13,
                textTransform: "lowercase",
                borderRadius: "30px",
                ":hover": {
                  color: "#90DBF4",
                },
              }}
              onClick={() => rate()}
            >
              change
            </Button>
          ) : (
            <Button
              sx={{
                mt: 3,
                ml: 2,
                backgroundColor: "#90DBF4",
                color: "white",
                fontSize: 13,
                textTransform: "lowercase",
                borderRadius: "30px",
                ":hover": {
                  color: "#90DBF4",
                },
              }}
              onClick={() => {
                rate();
                saveEditedProfile(profile.id, profileDetails);
              }}
            >
              submit
            </Button>
          )}
        </Box>

        {email == profile.user ? (
          <Box>
            <Typography
              onClick={() => navigate(`/editprofile/${profile.id}`)}
              sx={{
                width: {
                  xs:'50%', md:"fit-content"
                },
                color: "#E98A15",
                cursor: "pointer",
                ":hover": { color: "#F1C0E8" },
                my: 2,
              }}
            >
              edit profile
            </Typography>
            <Typography
              onClick={() => {
                navigate("/deletedprofile");
                deleteProfile(profile.id);
                handleLogout();
              }}
              sx={{
                width: "fit-content",
                color: "#B9FBC0",
                cursor: "pointer",
                ":hover": { color: "#F1C0E8" },
                my: 2,
              }}
            >
              delete profile
            </Typography>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default Profile;
