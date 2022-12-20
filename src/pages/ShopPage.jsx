import { Box } from "@mui/material";
import React from "react";
import Cart from "../components/Shop/Cart";
import Shop from "../components/Shop/Shop";

const ShopPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        mx: {
          xs: 1,
          sm: 10,
          lg: 32,
        },
        pb: 4,
      }}
    >
      <Shop />
      <Cart />
    </Box>
  );
};

export default ShopPage;
