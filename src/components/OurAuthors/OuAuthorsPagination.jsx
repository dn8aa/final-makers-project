import { Divider, Pagination, PaginationItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { Box, Stack } from "@mui/system";
// import { JSON_API_PRODUCTS } from "../../helpers/consts";
// import axios from "axios";
import { db } from "../../fire";
import { doc } from "firebase/firestore";

const ProductPagination = ({ page, setPage, count }) => {
  // function refreshPage() {
  //   window.location.reload(true);
  // }

  // useEffect(() => {
  //   refreshPage();
  // }, []);

  window.location.reload();
  //   const [productCount, setProductCount] = useState([]);
  //   async function productQuantity() {
  //     // const { data } = await axios.get(JSON_API_PRODUCTS);
  //     const profileDocRef = doc(db, "authors", id);
  //     const { data } = await getDoc(profileDocRef);
  //     setProductCount(data);
  //   }

  //   useEffect(() => {
  //     productQuantity();
  //   }, []);

  //   const handleChange = (e, p) => {
  //     setPage(p);
  //   };

  return (
    <></>
    //     <Pagination
    //       size="small"
    //       siblingCount={0}
    //       count={count}
    //       page={page}
    //       onChange={handleChange}
    //       renderItem={(item) => (
    //         <PaginationItem
    //           slots={{ previous: ArrowBackIosIcon, next: ArrowForwardIosIcon }}
    //           {...item}
    //         />
    //       )}
    //     />
  );
};

export default ProductPagination;
