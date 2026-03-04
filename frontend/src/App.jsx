// src/App.jsx

import React, { createContext } from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import User from "./components/User"
import Parent from "./components/Parent"
import State from "./hooks/State"
import Form from "./hooks/Form"
import Conditional from "./components/Conditional"

import Reducer from "./hooks/Reducer";
import ProductDetails from "./pages/ProductDetails"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

export const userContext = createContext()

const App = () => {

  const name = "Bindu"

  return (
    <userContext.Provider value={{ name }}>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:id" element={<ProductDetails />} />
      </Routes>

      <h2>Other Components</h2>

      <Conditional />

      <Form />

      <State />

      <Parent />
      <Reducer/>

      <User
        name="xyz"
        age={33}
        skills={["HTML", "CSS", "JS", "JAVA"]}
      />

    </userContext.Provider>
  )
}

export default App