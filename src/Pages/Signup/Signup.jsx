import React, { useState } from "react";
import "./Signup.css";
import { assests } from "../../assests/assests";

const Signup = ({ setshowLogin }) => {
  const [currstate, setcurrstate] = useState("login");

  return (
    <>
      <div className="login-container-box">
        <form className="login-form">
          <div className="loginpage-tittle">
            <h2>{currstate}</h2>
            <img
              onClick={() => setshowLogin(false)}
              src={assests.cross_icon}
              alt="close"
            />
          </div>

          <div className="login-inputs">
            {/* Show name + confirm password only in Sign Up */}
            {currstate === "signup" && (
              <>
                <input type="text" placeholder="Enter your name" required />
              </>
            )}
            {/* Always show email + password */}
            <input type="email" placeholder="Enter the Email" required />
            <input type="password" placeholder="Enter the Password" required />
             <input type="password" placeholder="Enter the Confirm Password" required />

            <button>
              {currstate === "signup" ? "Create Account" : "Login"}
            </button>

            <div className="login-popup-condition">
              <input type="checkbox" required />
              <p>I agree to the Terms of Service and Privacy Policy</p>
            </div>

            {currstate === "login" ? (
              <p>
                Create a New Account ?{" "}
                <span onClick={() => setcurrstate("signup")}>Click Here</span>
              </p>
            ) : (
              <p>
                Already have an account ?{" "}
                <span onClick={() => setcurrstate("login")}>Login Here</span>
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
