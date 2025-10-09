import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Navbar1 from "./components/Navbar1/Navbar1";
import MainBody from "./components/Mainbody/Mainbody";
import DisplayItems from "./components/Displayitems/Displayitems";
import Footer from "./components/Footer/Footer";
import Signup from "./Pages/Signup/Signup";
import IndividualDetail from "./Pages/IndividualDetail/IndividualDetail";
import Dealpanel from "./components/Dealpanel/Dealpanel";
import Cart from "./components/Cart/Cart"; // ✅ must match folder + file name

function App() {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Navbar />
      <Dealpanel />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar1 />
              {category === "All" ? (
                <MainBody setCategory={setCategory} />
              ) : (
                <DisplayItems category={category} setCategory={setCategory} />
              )}
              <Footer />
            </>
          }
        />
        <Route path="/item/:id" element={<IndividualDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
