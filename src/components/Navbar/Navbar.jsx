import React from 'react';
import { assests } from '../../assests/assests';  // go up 2 folders
import './Navbar.css';
import { useState } from 'react';



function Navbar() {

   const [showLogin, setshowLogin] = useState(false);

  return (
    <>
    <div className="navbar-container">
      <div className="navbar-img">
         <img src={assests.logo_1} alt="Navbar logo"/>
      </div>
    <div className="delivery">
      <div className="para-1">
      <p className='para-1'>Deliver to </p>
      </div>
      <div className="location">
      <img className='location-img' src={assests.location_logo} alt="location" />
      <p className='para-2'>Pakistan</p>
      </div>
    </div>

   <div className="search-bar">
  <input type="text" placeholder="Search products..." className="search-input"/>
  <img className="search-icon" src={assests.search_icon} alt="search"/>
</div>


 <div className="signin" onClick={() => setshowLogin(true)}>
          <span>
            <p>Hello, Sign in</p>
          </span>
        </div>

<div className="returns">
  <span><p>Returns</p></span>
  <span><p>& Orders</p></span>
</div>

<div className="cart">
 <img className="cart_icon" src={assests.cart_icon} alt="cart"/>
 <span><p className='cart-name'>Cart</p></span>
</div>
</div>

    </>
  );
}

export default Navbar;
