import Categories from "./pages/categories";
import Products from "./pages/Products";
import SignUp from "./components/SignUp";
import ProductDetails from "./pages/ProductDetails";
import LogIn from "./components/LogIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/signin" element={<LogIn />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
