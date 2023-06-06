import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import cars from "./cars.json";

// Import your component files here
import About from "./components/About";
import Car from "./components/Car";
import Home from "./components/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/car/:id" element={<Car cars={cars} />} />
    </Routes>
  );
};

export default AppRouter;
