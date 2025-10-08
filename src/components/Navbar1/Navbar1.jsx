import { assests } from "../../assests/assests";
import './Navbar1.css';

function Navbar1() {
  return (
  <>
  <div className="navbar1-container">
    <div className="mainbody-pic">
        <img src={assests.mainpic} alt="Main pic"/>
    </div>
  </div>
  </>
  )
}

export default Navbar1;