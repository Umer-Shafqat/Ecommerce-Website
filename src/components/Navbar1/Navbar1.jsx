import React from "react";
import { assests } from "../../assests/assests";
import './Navbar1.css';

function Navbar1() {
  return (
  <>
  <div className="navbar1-container">
     <div class="paraforpanel">
       <p>Welcome to our store! 🎉 Big sale today — Up to 50% OFF on selected items! 🚀</p>
    </div>
    <div className="mainbody-pic">
        <img src={assests.mainpic} alt="Main pic"/>
    </div>
  </div>
  </>
  )
}

export default Navbar1;
