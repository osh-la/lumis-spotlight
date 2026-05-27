import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ProductProvider } from "./context/productprovider.jsx";
import App from "./App.jsx";
import { CartProvider } from "./context/cartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </StrictMode>
);
