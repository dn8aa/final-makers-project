import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useSetProfile } from "../../contexts/SetProfileContext";

const PostComments = ({ post, authorEmail, indexForMethod }) => {
  const {
    user: { email },
  } = useAuth();

  const navigate = useNavigate();
  const { saveEditedProfile, profiles, getProfiles } = useSetProfile();

  const profile = profiles.find((profile) => profile.user === authorEmail);
  // console.log(profile);

  useEffect(() => {
    getProfiles();
  }, []);

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

  const [input, setInput] = useState("");

  const [profileDetails, setProfileDetails] = useState(profile);
  useEffect(() => {
    setProfileDetails(profile);
  }, [profile]);

  function handleInput(e) {
    setInput(e.target.value);
  }

  function addComment() {
    let commentObj = {
      userId: profile.id,
      // avatar: profile.avatar,
      comment: input,
      user: email,
      // username: profile.username,
      date: getDate(),
    };

    let newProfileDetails = { ...profileDetails };
    newProfileDetails.posts[indexForMethod].comments.unshift(commentObj);

    setProfileDetails(newProfileDetails);
    setInput("");
  }

  function deleteComment(index) {
    let newProfileDetails = { ...profileDetails };
    newProfileDetails.posts[indexForMethod].comments.splice(index, 1);
    setProfileDetails(newProfileDetails);
  }

  // console.log(post.comments);
  return (
    <Box sx={{ mt: 2 }}>
      <Typography>Leave your comment!</Typography>

      <Box sx={{ display: "flex", height: "fit-content" }}>
        {" "}
        <textarea
          style={{ width: "75%", whiteSpace: "no-wrap", padding: "2%" }}
          onChange={handleInput}
          value={input}
        />
        <Button
          sx={{
            width: "20%",
            m: 4,
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
          onClick={() => {
            addComment();
            saveEditedProfile(profile.id, profileDetails);
          }}
        >
          send
        </Button>
      </Box>
      <Typography>Comments</Typography>

      {profileDetails.posts[indexForMethod].comments?.map((comment, index) => {
        const findUser = profiles.find(
          (profile) => profile.user === comment.user
        );
        if (findUser) {
          return (
            <Box
              key={index}
              sx={{
                borderBottom: "1px solid lightgrey",
                py: 3,
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              {" "}
              <img
                width="50px"
                height="50px"
                onClick={() => navigate(`/profile/${findUser.user}`)}
                src={findUser.avatar}
                alt=""
                style={{ width: "8%", borderRadius: "50%", cursor: "pointer" }}
              />
              <Box sx={{ ml: 2, width: "100%" }}>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    sx={{ cursor: "pointer", width: "fit-content" }}
                    onClick={() => navigate(`/profile/${findUser.user}`)}
                  >
                    {findUser.username}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 16,
                      color: "grey",
                      fontFamily: "Playfair Display",
                      ml: 2,
                    }}
                  >
                    {comment.date}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    width: "85%",
                    wordWrap: "break-word",
                    fontFamily: "Playfair Display",
                    mt: 1,
                    mb: 2,
                  }}
                >
                  {comment.comment}
                </Typography>
                {findUser.user == email ? (
                  <Button
                    onClick={() => {
                      deleteComment(index);
                      saveEditedProfile(profile.id, profileDetails);
                    }}
                    sx={{
                      width: "10%",
                      fontSize: 13,
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
                    delete
                  </Button>
                ) : (
                  <></>
                )}
              </Box>
            </Box>
          );
        }
      })}
    </Box>
  );
};

export default PostComments;
