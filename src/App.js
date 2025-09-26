import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Navbar1 from "./components/Navbar1/Navbar1";
import MainBody from "./components/Mainbody/Mainbody";
import DisplayItems from "./components/Displayitems/Displayitems";
import Footer from "./components/Footer/Footer";

function App() {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Navbar />
      <Navbar1 />

      {category === "All" ? (
        <MainBody setCategory={setCategory} />
      ) : (
        <DisplayItems category={category} setCategory={setCategory} />
      )}
    <Footer></Footer>

    </>
  );
}

export default App;
