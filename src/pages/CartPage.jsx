import { Box } from "@mui/system";
import React from "react";
import Cart from "../components/Shop/Cart";

const CartPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        mx: {
          xs: 1,
          sm: 10,
          lg: 35,
        },
        pb: 4,
      }}
    >
      <Cart />
    </Box>
  );
};

export default CartPage;
