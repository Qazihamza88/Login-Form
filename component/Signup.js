import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imageSrc from './Images/loginimage.png';



const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validate = () => {
    let usernameError = "";
    let emailError = "";
    let passwordError = "";

    // Validate username
    if (!username.trim()) {
      usernameError = "Username is required";
    }

    // Validate email
    if (!email.includes("@")) {
      emailError = "Invalid email";
    }

    // Validate password
    if (password.length < 8) {
      passwordError = "Password length should be at least 8 characters";
    } else if (!/(?=.*[a-zA-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)) {
      passwordError = "Password must contain at least one alphabet character and one special character";
    }

    setUsernameError(usernameError);
    setEmailError(emailError);
    setPasswordError(passwordError);

    return !(usernameError || emailError || passwordError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      console.log("Valid form");
      // Here you can submit the form or perform any other action

      // Clear input fields
      setUsername("");
      setEmail("");
      setPassword("");
      setUsernameError("");
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
        {/* <div className='row'> */}
        {/* <div className='col-md-6'>  */}
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p style={{ color: "red" }}>{usernameError}</p>
      </div>
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p style={{ color: "red" }}>{passwordError}</p>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <Link to="/sign-in">Login</Link>
      </p>
    </form>
    </div>
    <div className='col-md-6'>
    <img src={imageSrc} alt="Your Image" className="img-fluid" width= "500px" style={{ margin:"70px",height: "400px", borderRadius: "20px" }} />
    </div>
    </div>
    </div>
    {/* </div> */}
    {/* </div> */}
    </>
  );
};

export default SignUp;
