import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import SetProfileContextProvider from "./contexts/SetProfileContext";
import ProductContext from "./contexts/ProductContext";
import ProductContextProvider from "./contexts/ProductContext";
import CartContextProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartContextProvider>
      {" "}
      <ProductContextProvider>
        <SetProfileContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>{" "}
        </SetProfileContextProvider>
      </ProductContextProvider>
    </CartContextProvider>
  </BrowserRouter>
);
