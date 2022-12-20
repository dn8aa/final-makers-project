import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useCart } from "../../contexts/CartContext";
import { useProducts } from "../../contexts/ProductContext";

const ShopItem = ({ item }) => {
  const { spotifyLinkChange } = useProducts();

  console.log(spotifyLinkChange(item.link));
  const { addProductToCart, checkProductInCart } = useCart();
  return (
    <Box sx={{ width: "fit-content", p: 1, mb: 2 }}>
      <iframe
        // style="border-radius:12px"
        src={spotifyLinkChange(item.link)}
        width="200px"
        height="240px"
        // width="400px"
        // height="100px"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: 20 }}>{item.price}$</Typography>
        {checkProductInCart(item.id) ? (
          <Button
            onClick={() => addProductToCart(item)}
            sx={{
              color: "white",
              border: "2px solid #FDE4CF",
              color: "black",
              borderRadius: "20px",
              fontSize: 13,
              ":hover": { color: "black" },
            }}
          >
            Remove from Cart
          </Button>
        ) : (
          <Button
            onClick={() => addProductToCart(item)}
            sx={{
              border: "2px solid #B9FBC0",
              color: "black",
              borderRadius: "20px",
              fontSize: 13,
              ":hover": { color: "black" },
            }}
          >
            Add to Cart
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ShopItem;

// const inp = document.querySelector("input");
// const btn = document.querySelector("button");
// const div = document.querySelector("div");

// btn.addEventListener("click", () => {
//   let link = inp.value;

//   link = link.split("");

//   let newLink = [];
//   console.log(link);
//   for (i = 0; i < link.length; i++) {
//     if (link[i] != "?") {
//       newLink.push(link[i]);
//     } else break;
//   }
//   console.log(newLink);

//   let secondHalf = newLink.splice(25);
//   let firstHalf = newLink;

//   firstHalf = firstHalf.join("");
//   secondHalf = secondHalf.join("");

//   let finalLink = firstHalf + "embed/" + secondHalf + "?utm_source=generator";

//       div.innerHTML = `
//     <iframe
//       style="border-radius:12px"
//       src="${finalLink}"
//       width="100%"
//       height="152"
//       frameBorder="0"
//       allowfullscreen=""
//       allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//       loading="lazy"
//     ></iframe>`
// });
