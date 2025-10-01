// src/components/Navbar/Navbar.jsx
import {  useNavigate } from "react-router-dom"; // ✅ for navigation
import { assests } from "../../assests/assests"; 
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      {/* ✅ Logo → back to home (main shop page) */}
      <div className="navbar-img" onClick={() => navigate("/")}>
        <img src={assests.logo_1} alt="Navbar logo" style={{ cursor: "pointer" }} />
      </div>

      {/* Delivery section */}
      <div className="delivery">
        <div className="para-1">
          <p className="para-1">Deliver to </p>
        </div>
        <div className="location">
          <img className="location-img" src={assests.location_logo} alt="location" />
          <p className="para-2">Pakistan</p>
        </div>
      </div>

      {/* Search bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search products..." className="search-input" />
        <img className="search-icon" src={assests.search_icon} alt="search" />
      </div>

      {/* ✅ Signin → opens Signup page */}
      <div className="signin" onClick={() => navigate("/signup")}>
        <span>
          <p>Hello, Sign in</p>
        </span>
      </div>

      {/* Returns section */}
      <div className="returns">
        <span>
          <p>Returns</p>
        </span>
        <span>
          <p>& Orders</p>
        </span>
      </div>

      {/* Cart */}
      <div className="cart">
        <img className="cart_icon" src={assests.cart_icon} alt="cart" />
        <span>
          <p className="cart-name">Cart</p>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
