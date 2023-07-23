import logo from "./logo.svg";
import "./App.css";
import Box from "@mui/material/Box";
import Navbar from "./componenets/Navbar";
import "./componenets/Navbar.css";
import ProductCard from "./componenets/ProductCard";
import Products from "./componenets/Products";
import Filter from "./componenets/Filter";
import Cart from "./componenets/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Box mt={10}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>
      </div>
    </Router>
  );
}

export default App;
