
import Shop from "./pages/shop/Shop";
import { Router, Route,Routes } from "react-router-dom";
import Man from "./pages/man/Man";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Cart from "./pages/Cart/Cart";
import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Shop />} path="/" />
        <Route element={<Man />} path="/man" />
        <Route element={<ProductInfo />} path="/product/:id" />
        <Route element={<Cart />} path="/cart" />
      </Routes>
    </div>
  );
};

export default App;
