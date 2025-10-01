// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Navbar1 from "./components/Navbar1/Navbar1";
import MainBody from "./components/Mainbody/Mainbody";
import DisplayItems from "./components/Displayitems/Displayitems";
import Footer from "./components/Footer/Footer";
import Signup from "./Pages/Signup/Signup";

function App() {
  const [category, setCategory] = useState("All");

  return (
    <>
      {/* Navbar always visible */}
      <Navbar />
      <Navbar1 />
      
      <Routes>
        {/* Main shop layout (default) */}
        <Route
          path="/"
          element={
            <>
              
              {category === "All" ? (
                <MainBody setCategory={setCategory} />
              ) : (
                <DisplayItems category={category} setCategory={setCategory} />
              )}
              <Footer />
            </>
          }
        />

        {/* Signup page (opens when Signin is clicked) */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
