import React from "react";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="LoginContainer">
        <div className="Login">
          <div className="logoImage">
            <img
              className="Loginlogo"
              src={require("../assets/autointelli-icon.png")}
              alt="cc"
            />
          </div>

          {/* <div className="formHeading">
          <h2 className="data">Log in to see your data</h2></div> */}
        </div>
      </div>
    </>
  );
};

export default Login;
