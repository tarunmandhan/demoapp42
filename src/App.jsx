import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Home from "./Home";

const App = () => {
  const Name = () => {
    return <h1> this is Name page.</h1>;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"      element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*"      element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
