import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSetProfile } from "../../contexts/SetProfileContext";
import HomePagePostCard from "./HomePagePostCard";

const HomePagePosts = ({ profiles }) => {
  const {
    all,
    setAll,
    mentalHealth,
    setMentalHealth,
    culture,
    setCulture,
    politics,
    setPolitics,
    technology,
    setTechnology,
    travel,
    setTravel,
  } = useSetProfile();
  // useEffect(() => {
  //   renderAll();
  // }, [all]);

  function renderAll() {
    console.log("djk");
    if (all) {
      return profiles?.map((user, index) => (
        <Box
          sx={{ display: "flex", flexDirection: "column-reverse" }}
          key={index}
        >
          {user.posts.map((post, index) => {
            const findUser = profiles.find(
              (profile) => profile.user === post.user
            );
            if (findUser) {
              return (
                <HomePagePostCard
                  post={post}
                  key={index}
                  index={index}
                  findUser={findUser}
                />
              );
            }
          })}
        </Box>
      ));
    }
  }

  function renderMentalHealth() {
    if (mentalHealth) {
      return profiles?.map((user, index) => (
        <div key={index}>
          {user.posts
            .filter((post) => post.topic == "mentalhealth")
            .map((post, index) => {
              const findUser = profiles.find(
                (profile) => profile.user === post.user
              );
              if (findUser) {
                return (
                  <HomePagePostCard
                    post={post}
                    key={index}
                    index={index}
                    findUser={findUser}
                  />
                );
              }
            })}
        </div>
      ));
    }
  }
  function renderCulture() {
    if (culture) {
      return profiles?.map((user, index) => (
        <div key={index}>
          {user.posts
            .filter((post) => post.topic == "culture")
            .map((post, index) => {
              const findUser = profiles.find(
                (profile) => profile.user === post.user
              );
              if (findUser) {
                return (
                  <HomePagePostCard
                    post={post}
                    key={index}
                    index={index}
                    findUser={findUser}
                  />
                );
              }
            })}
        </div>
      ));
    }
  }
  function renderPolitics() {
    if (politics) {
      return profiles?.map((user, index) => (
        <div key={index}>
          {user.posts
            .filter((post) => post.topic == "politics")
            .map((post, index) => {
              const findUser = profiles.find(
                (profile) => profile.user === post.user
              );
              if (findUser) {
                return (
                  <HomePagePostCard
                    post={post}
                    key={index}
                    index={index}
                    findUser={findUser}
                  />
                );
              }
            })}
        </div>
      ));
    }
  }
  function renderTechnology() {
    if (technology) {
      return profiles?.map((user, index) => (
        <div key={index}>
          {user.posts
            .filter((post) => post.topic == "technology")
            .map((post, index) => {
              const findUser = profiles.find(
                (profile) => profile.user === post.user
              );
              if (findUser) {
                return (
                  <HomePagePostCard
                    post={post}
                    key={index}
                    index={index}
                    findUser={findUser}
                  />
                );
              }
            })}
        </div>
      ));
    }
  }

  function renderTravel() {
    if (travel) {
      return profiles?.map((user, index) => (
        <div key={index}>
          {user.posts
            .filter((post) => post.topic == "travel")
            .map((post, index) => {
              const findUser = profiles.find(
                (profile) => profile.user === post.user
              );
              if (findUser) {
                return (
                  <HomePagePostCard
                    post={post}
                    key={index}
                    index={index}
                    findUser={findUser}
                  />
                );
              }
            })}
        </div>
      ));
    }
  }

  return (
    <Box
      sx={{
        width: "100%",
        pt: 5,
        minHeight: "100vh",
      }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap", mb: 3 }}>
        <Button
          onClick={() => {
            setAll(true);
            setMentalHealth(false);
            setCulture(false);
            setPolitics(false);
            setTechnology(false);
            setTravel(false);
          }}
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
          onClick={() => {
            setAll(false);
            setMentalHealth(true);
            setCulture(false);
            setPolitics(false);
            setTechnology(false);
            setTravel(false);
          }}
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
          onClick={() => {
            setAll(false);
            setMentalHealth(false);
            setCulture(true);
            setPolitics(false);
            setTechnology(false);
            setTravel(false);
          }}
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
          onClick={() => {
            setAll(false);
            setMentalHealth(false);
            setCulture(false);
            setPolitics(false);
            setTechnology(true);
            setTravel(false);
          }}
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
          onClick={() => {
            setAll(false);
            setMentalHealth(false);
            setCulture(false);
            setPolitics(true);
            setTechnology(false);
            setTravel(false);
          }}
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
          onClick={() => {
            setAll(false);
            setMentalHealth(false);
            setCulture(false);
            setPolitics(false);
            setTechnology(false);
            setTravel(true);
          }}
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
      {renderAll()}
      {renderMentalHealth()}
      {renderCulture()}
      {renderPolitics()}
      {renderTechnology()}
      {renderTravel()}
    </Box>
  );
};

export default HomePagePosts;
