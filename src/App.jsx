import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./componants/Navbar";
import Products from "./componants/Products";
import ProductDetails from "./componants/ProductDetails";
import ProductForm from "./componants/ProductForm";
import Error from "./componants/Error";
import Home from "./componants/Home";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="/products/:id/edit" element={<ProductForm />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
