import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSetProfile } from "../../contexts/SetProfileContext";
import HomePagePostCard from "./HomePagePostCard";

const HomePagePosts = ({ profiles }) => {
  return (
    <Box
      sx={{
        width: "70%",
        pt: 5,
        borderRight: "1px solid lightgrey",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap", mb:3 }}>
        <Button
          sx={{
            fontSize: 16,
            m: 1,

            color: "",
            display: "block",
            // backgroundColor: "#CDB4DB",
            textTransform: "lowercase",
            border: "2px solid #CDB4DB ",
            borderRadius: "30px",
            color: "black",
            fontFamily: "Playfair Display",
            ":hover": {
              color: "black",
            },
          }}
        >
          all
        </Button>
        <Button
          sx={{
            m: 1,
            fontSize: 16,
            border: "2px solid #FDE4CF",
            color: "",
            display: "block",
            textTransform: "lowercase",
            borderRadius: "30px",
            color: "black",
            fontFamily: "Playfair Display",
            ":hover": {
              color: "black",
            },
          }}
        >
          mental health
        </Button>
        <Button
          sx={{
            m: 1,
            fontSize: 16,
            border: "2px solid #B9FBC0",

            color: "",
            display: "block",
            textTransform: "lowercase",
            borderRadius: "30px",
            color: "black",
            fontFamily: "Playfair Display",
            ":hover": {
              color: "black",
            },
          }}
        >
          culture
        </Button>
        <Button
          sx={{
            m: 1,
            fontSize: 16,
            border: "2px solid #90DBF4",

            color: "",
            display: "block",
            textTransform: "lowercase",
            borderRadius: "30px",
            color: "black",
            fontFamily: "Playfair Display",
            ":hover": {
              color: "black",
            },
          }}
        >
          technology
        </Button>
        <Button
          sx={{
            m: 1,
            fontSize: 16,
            border: "2px solid #F1C0E8",

            color: "",
            display: "block",
            textTransform: "lowercase",
            borderRadius: "30px",
            color: "black",
            fontFamily: "Playfair Display",
            ":hover": {
              color: "black",
            },
          }}
        >
          politics
        </Button>
        <Button
          sx={{
            m: 1,
            fontSize: 16,
            border: "2px solid #FBF8CC",

            display: "block",
            textTransform: "lowercase",
            borderRadius: "30px",
            color: "black",
            fontFamily: "Playfair Display",
            ":hover": {
              color: "black",
            },
          }}
        >
          travel
        </Button>
        
      </Box>
      {profiles?.map((user, index) => (
        <div key={index}>
          {user.posts.map((post, index) => (
            <HomePagePostCard post={post} key={index} index={index}/>
          ))}
        </div>
      ))}
    </Box>
  );
};

export default HomePagePosts;
