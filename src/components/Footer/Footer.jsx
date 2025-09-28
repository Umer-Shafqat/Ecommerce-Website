import "./Footer.css";
import { assests } from "../../assests/assests";

function Footer() {
  return (
   <>
   <div className="footer">
        
        <div className="footer-panel2">
            <ul>
                <a href="About" className="about no-underline">About</a>
                <p id="about">At Lustora, we believe shopping should be 
                  more than just buying products — it should 
                  be an experience that inspires style, 
                  comfort, and confidence.</p>
              
            </ul>
            
             <ul>
              <p className="Quicklink no-underline">Quick Links</p>
              <a href="/Shop" id="shop">Shop</a>
              <a href="/Aboutus" id="aboutus">About Us</a>
              <a href="Contact" id="Contact">Contact</a>
              <a href="OurTeam" id="OurTeam">Our Team</a>
            </ul> 
            <ul>
              <p className="Customersupport no-underline">Customer Support</p>
              <a href="/Shippingreturns" id="shippingreturns">Shipping and Returns</a>
              <a href="/Privacypolicy" id="privacypolicy">Privacy Policy</a>
              <a href="Termsservices" id="termsservices">Terms of services</a>

            </ul>
            <ul>
              <p className="Followus no-underline">Follow Us</p>
              <a href="/Facebook" id="facebook">Facebook</a>
              <a href="/twitter" id="twitter">Twitter</a>
              <a href="/Instagram" id="instagram">Instagram</a>
              <a href="/Youtube" id="youtube">YouTube</a>
            </ul>
        </div>

        <div className="footer-panel3">
            <div className="image">
             <img src={assests.logo_1} alt="logo"/>
                         </div>
        </div>

        <div className="footer-panel4">
            <div className="footer-pages">
              <a href="/Conditions of Use">Conditions of Use</a>
                   <a href="/Privacy Notice">privacy Notice</a>
             <a href="/Consumer Health Data Privacy Disclosure">Consumer Health Data Privacy Disclosure</a>
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
