import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Narbar";
import Home from "./components/Home";
import Serice from "./components/Service";
import About from "./components/About";
import Product from "./components/Product";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import CustomFooter from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Serice />
      <About />
      <Product />
      <Blog />
      <Newsletter />
      <CustomFooter />
    </>
  );
}

export default App;
