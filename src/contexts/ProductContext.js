import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
export const productContext = createContext();
export const useProducts = () => {
  return useContext(productContext);
};

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const { data } = await axios("http://localhost:8000/products");
    setProducts(data);
  }
  //   getProducts();
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  function spotifyLinkChange(itemlink) {
    let newLink = itemlink?.split("");

    // console.log(newLink);

    let secondHalf = newLink?.splice(25);
    let firstHalf = newLink;

    firstHalf = firstHalf?.join("");
    secondHalf = secondHalf?.join("");

    let finalLink = firstHalf + "embed/" + secondHalf + "?utm_source=generator";

    return finalLink;
  }
//   console.log();

//   useEffect(() => {
//     console.log(
//       spotifyLinkChange(
//         "https://open.spotify.com/track/16tU7M0qquqkou1MnipA9h?si=87bbd2e04a684873"
//       )
//     );
//   }, []);

  const values = { products, getProducts, spotifyLinkChange };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
