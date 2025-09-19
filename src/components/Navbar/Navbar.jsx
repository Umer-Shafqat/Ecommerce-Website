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
    
    </div>
    </>
  );
}

export default Navbar;
