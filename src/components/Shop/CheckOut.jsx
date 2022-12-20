import { Box, Button, TextField } from "@mui/material";
import React from "react";

const CheckOut = () => {
  return (
    <Box sx={{ m: 2, borderTop: "1px solid lightgrey", pt: 3 }}>
      <input
        placeholder="name"
        style={{
          display: "block",
          margin: "auto",
          padding: "5%",
          borderRadius: "30px",
          border: "1px solid grey",
          marginBottom: "3%",
        }}
      />
      <input
        placeholder="address"
        style={{
          display: "block",
          margin: "auto",
          padding: "5%",
          borderRadius: "30px",
          border: "1px solid grey",
        }}
      />
      <Button
        sx={{
          margin: "auto",
          display: "block",
          border: "2px solid #FBF8CC",
          color: "black",
          borderRadius: "20px",
          mt: 3,
        }}
      >
        pay
      </Button>
    </Box>
  );
};

export default CheckOut;
