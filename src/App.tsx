import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import ProductCart from "./components/ProductCart";
import Products from "./components/Products";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Products />
    </>
  );
}

export default App;
