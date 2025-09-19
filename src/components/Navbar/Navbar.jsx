import React from 'react';
import { assests } from '../../assests/assests';  // go up 2 folders
import './Navbar.css';

function Navbar() {
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
         </div>
    </>
  );
}

export default Navbar;
