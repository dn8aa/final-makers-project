import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContext";
import ShopItem from "./ShopItem";

const Shop = () => {
  const { products, getProducts } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);
  //   console.log(products);
  return (
    <Box
      sx={{
        width: "70%",
        pt: 5,
        borderRight: "1px solid lightgrey",
        minHeight: "100vh",
      }}
    >
      <Typography sx={{fontSize:30, fontWeight:600}}>Fake Shop</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent:'space-around' }}>
        {products.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default Shop;
