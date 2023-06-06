import React from "react";
import { Routes, Route } from "react-router-dom";
import Router from "./Router";
import Navigation from "./components/Navigation";
import "./App.css";
import About from "./components/About";
import Car from "./components/Car";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Router />} />
        <Route path="/about" element={<About />} />
        <Route path="/car/:id" element={<Car />} />
      </Routes>
    </div>
  );
}

export default App;
