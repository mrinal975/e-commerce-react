import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Products from "./components/Products";
import Banner from "./components/Banner";
import { useState } from "react";
import Cart from "./components/Cart";
function App() {
  const [openCart, setOpenCart] = useState(false);
  return (
    <>
      <Navbar setOpenCart={setOpenCart} />
      {openCart && <Cart setOpenCart={setOpenCart} />}
      <Home />
      <Services />
      <Products />
      <Banner />
    </>
  );
}

export default App;
