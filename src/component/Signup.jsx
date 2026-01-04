import React from "react";
import signupimage from "./Images/image.png";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import AppleIcon from '@mui/icons-material/Apple';
function Signup() {
  return (
    <>
      <div className="signup_form_background">
        <p className="logo">Your Logo</p>

        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-7">
            <img src={signupimage} className="signup_image" alt="" />
          </div>

          <div className="col-lg-5 col-md-5 col-12 col-sm-5 mt-6">
            <form id="form">
              <h2 className="mb-3">Signup</h2>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="form-control form_input"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Create User name"
                  className="form-control form_input"
                  id="createUserName"
                  name="createUsername"
                  aria-describedby="usernameHelp"
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  placeholder="Contact number"
                  className="form-control form_input"
                  id="contactNumber"
                  name="contactNumber"
                  aria-describedby="contactNumberHelp"
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control form_input"
                  id="password"
                  name="password"
                  aria-describedby="passwordHelp"
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control form_input"
                  id="confirmPassword"
                  name="confirmPassword"
                  aria-describedby="confirmPasswordHelp"
                />
              </div>
              <button type="submit" className="register_button">
                Register
              </button>

              <div className="signup_option_heading">
                <p>or continue with</p>
              </div>

              <div className="signup_option">
                <div className="social_media_icons_container">
                  <GoogleIcon className="social_media_icon google_icon" />
                  <FacebookTwoToneIcon className="social_media_icon facebook_icon" />
                  <AppleIcon className="social_media_icon apple_icon" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
