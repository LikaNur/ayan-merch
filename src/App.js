import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden">
      {/* Router component to handle routing */}
      <Router>
        {/* Header component */}
        <Header />
        {/* Routes component to define routes */}
        <Routes>
          {/* Route for home page */}
          <Route path="/" element={<Home />} />
          {/* Route for product details page */}
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        {/* Sidebar component */}
        <Sidebar />
        {/* Footer component */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
