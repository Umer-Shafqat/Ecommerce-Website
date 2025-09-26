import "./Footer.css";
import { assests } from "../../assests/assests";

function Footer() {
  return (
   <>
   <div className="footer">
        <div className="footer-panel1">
            Back to top
        </div>

        <div className="footer-panel2">
            <ul>
                <a className="about no-underline">About</a>
                <p id="about">At Lustora, we believe shopping should be 
                  more than just buying products — it should 
                  be an experience that inspires style, 
                  comfort, and confidence.</p>
              
            </ul>
             <ul>
              <p className="Quicklink no-underline">Quick Links</p>
              <a id="shop">Shop</a>
              <a id="aboutus">About Us</a>
              <a id="Contact">Contact</a>
              <a id="OurTeam">Our Team</a>
            </ul> 
            <ul>
              <p className="Customersupport no-underline">Customer Support</p>
              <a id="shippingreturns">Shipping and Returns</a>
              <a id="privacypolicy">Privacy Policy</a>
              <a id="termsservices">Terms of services</a>

            </ul>
            <ul>
              <p className="Followus no-underline">Follow Us</p>
              <a id="facebook">Facebook</a>
              <a id="twitter">Twitter</a>
              <a id="instagram">Instagram</a>
              <a id="youtube">YouTube</a>
            </ul>
        </div>

        <div className="footer-panel3">
            <div className="image">
             <img src={assests.logo_1} alt="logo"/>
                         </div>
        </div>

        <div className="footer-panel4">
            <div className="footer-pages">
              <a>Conditions of Use</a>
                   <a>privacy Notice</a>
             <a>Consumer Health Data Privacy Disclosure</a>
            </div>
       
            <div className="copy-right">
              © 1996-2025, Lustura.com, Inc. or its affiliates
            </div>
        </div>
</div>
   </>
  )
}

export default Footer;
