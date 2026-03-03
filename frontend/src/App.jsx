import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ProductDetails />} />
      </Routes>

      <div>App</div>
    </>
  );
};

export default App;