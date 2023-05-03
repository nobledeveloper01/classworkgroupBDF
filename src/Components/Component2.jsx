import React from "react";
import Button from "./Button";

function RightComponent() {
  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <div className="container-Two">
      <div className="btn-one">
        <button className="button-one"> Create Account</button>
      </div>

      <div className="form">
        <div className="form-align">
          <h4 className="title">Sign in</h4>
          <h5 className="title-two">Welcome Back!</h5>
          <p className="para-one">
            Sign in and enjoy zero service charge 
            on all your transaction
          </p>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="enter your email"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="enter your password"
            />
          </div>

          <p className="para-two">
            Forget your password? <strong>Reset</strong>
          </p>
          <div className="btn-two">
          <button className="button-two">Sign In</button>
        </div>
        </div>    
      </div>
    </div>
  );
}
export default RightComponent;
