import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./features/Headder/Header";
import Home from "./features/Home/Home";
import AboutUs from "./features/About/AboutUs";

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<AboutUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
