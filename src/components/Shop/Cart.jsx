import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import { useProducts } from "../../contexts/ProductContext";
import CheckOut from "./CheckOut";
import ClearIcon from "@mui/icons-material/Clear";

const Cart = () => {
  const {
    getCart,
    cart,
    changeProductCount,
    deleteCartProduct,
    checkOut,
    setCheckOut,
  } = useCart();
  const { spotifyLinkChange } = useProducts();

  useEffect(() => {
    getCart();
  }, []);
  return (
    <Box sx={{ width: "30%", mt: 5, m: 2 }}>
      <Typography sx={{ m: 2, fontSize: 30, fontWeight: 600 }}>Cart</Typography>
      {cart?.products.map((row, i) => (
        <Box sx={{ m: 2, display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ width: "75%" }}>{row.item.name}</Typography>
          <Typography>${row.item.price}</Typography>
          <ClearIcon
            sx={{ cursor: "pointer" }}
            onClick={() => {
              deleteCartProduct(row.item.id);
              console.log("d");
            }}
          />
        </Box>
      ))}
      <Box
        sx={{
          m: 2,
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid lightgrey",
          pt: 2,
        }}
      >
        {" "}
        <Typography sx={{ fontWeight: 600 }}>Total</Typography>
        <Typography sx={{ fontWeight: 600 }}>${cart.totalPrice}</Typography>
      </Box>
      <Button
        onClick={() => setCheckOut(!checkOut)}
        sx={{
          margin: "auto",
          display: "block",
          border: "2px solid #F1C0E8",
          color: "black",
          borderRadius: "20px",
          mb: 3,
        }}
      >
        checkout
      </Button>
      {checkOut ? <CheckOut /> : <></>}
    </Box>
  );
};

export default Cart;
