import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imageSrc from './Images/loginimage.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validate = () => {
    let emailError = "";
    let passwordError = "";

    // Validate email
    if (!email.includes("@")) {
      emailError = "Invalid email";
    }

    // Validate password
    if (password.length < 8) {
      passwordError = "Password length should be at least 8 characters";
    } else if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]/.test(password)) {
      passwordError = "Password must contain at least one uppercase letter and one special character";
    }

    setEmailError(emailError);
    setPasswordError(passwordError);

    return !(emailError || passwordError);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      console.log("Valid form");
      // Here you can submit the form or perform any other action

      // Clear input fields
      setEmail("");
      setPassword("");
      setEmailError("");
      setPasswordError("");
    } else {
      console.log("Invalid form");
    }
  };

  return (
    <>        
     <div className="container-fluid" >
        <div className="auth-wrapper d-flex flex-row justify-content-space-around">
          <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p style={{ color: "red" }}>{emailError}</p>
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p style={{ color: "red" }}>{passwordError}</p>
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p className="sign-up">
              <Link to="/sign-up">Signup</Link>
            </p>
            <p className="forgot-password">
              <Link to="/Forget">Forgot Password?</Link>
            </p>
          </div>
        </form>
      </div>
      <div className=''>
      <img src={imageSrc} alt="Your Image" className="img-fluid" width= "500px" style={{ margin:"70px",height: "400px", borderRadius: "20px" }} />
      </div>
     
      </div>
     
      </div>
      </>
  );
};

export default Login;
