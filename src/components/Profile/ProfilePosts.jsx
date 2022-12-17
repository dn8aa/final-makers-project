import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import ProfilePostCard from "./ProfilePostCard";

const ProfilePosts = ({ profile, userEmail }) => {
  const {
    user: { email },
  } = useAuth();

  // console.log(email);
  // console.log(userEmail);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "70%",
        pt: 5,
        borderRight: "1px solid lightgrey",
        minHeight: "100vh",
      }}
    >
      <Typography sx={{ fontSize: 40, fontWeight: 600, mb: 2 }}>
        {profile.username}
      </Typography>

      {profile.posts.length != 0 ? (
        <Typography
          sx={{ mb: 2, color: "#a7c957", fontWeight: 600, fontSize: 30 }}
        >
          posts
        </Typography>
      ) : (
        <Box>
          <Typography
            sx={{ mb: 2, color: "#a7c957", fontWeight: 600, fontSize: 30 }}
          >
            no posts yet
          </Typography>
          {email == userEmail ? (
            <Typography
              onClick={() => navigate("/writepost")}
              sx={{
                mb: 2,
                color: "#CDB4DB",
                fontWeight: 600,
                fontSize: 20,
                cursor: "pointer",
                width: "fit-content",
                ":hover": { color: "#E98A15" },
              }}
            >
              write something new
            </Typography>
          ) : (
            <></>
          )}
        </Box>
      )}
      {profile.posts?.map((post, index) => (
        <ProfilePostCard
          key={index}
          post={post}
          index={index}
          userEmail={userEmail}
        />
      ))}
    </Box>
  );
};

export default ProfilePosts;
