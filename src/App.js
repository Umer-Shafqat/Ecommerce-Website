import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Navbar1 from "./components/Navbar1/Navbar1";
import MainBody from "./components/Mainbody/Mainbody";
import DisplayItems from "./components/Displayitems/Displayitems";
import Footer from "./components/Footer/Footer";
import Signup from "./Pages/Signup/Signup";
import IndividualDetail from "./Pages/IndividualDetail/IndividualDetail";

function App() {
  const [category, setCategory] = useState("All");

  return (
    <>
      {/* Always visible navbars */}
      <Navbar />
      <Navbar1 />

      <Routes>
        {/* Default main shop page */}
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

        {/* Signup page */}
        <Route path="/signup" element={<Signup />} />

        {/* Individual product detail page */}
        <Route path="/item/:id" element={<IndividualDetail />} />
      </Routes>
    </>
  );
}

export default App;
