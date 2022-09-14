import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./features/Headder/Header";
import Home from "./features/Home/Home";
import AboutUs from "./features/About/AboutUs";
import Courses from "./features/courses/Courses";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<AboutUs />}></Route>
          <Route path="/Courses" element={<Courses />}></Route>
          <Route
            path="*"
            element={
              <div>
                <h1>404 Not found</h1>
              </div>
            }
          ></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
