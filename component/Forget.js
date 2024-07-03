import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imageSrc from './Images/loginimage.png';


const Forget = () => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState("");

  const validate = () => {
    let confirmPasswordError = "";
    let confirmNewPasswordError = "";

    // Check if Confirm Password and Confirm New Password are different
    if (confirmPassword !== confirmNewPassword) {
      setPasswordMatchError("Passwords do not match");
      return false;
    }

    // Validate if Confirm Password contains at least one alphabet character and one special character
    if (!/(?=.*[a-zA-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(confirmPassword)) {
      confirmPasswordError = "Password must contain at least one alphabet and one special character";
    }

    // Validate if Confirm New Password contains at least one alphabet character and one special character
    if (!/(?=.*[a-zA-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(confirmNewPassword)) {
      confirmNewPasswordError = "Password must contain at least one alphabet and one special character";
    }

    setConfirmPasswordError(confirmPasswordError);
    setConfirmNewPasswordError(confirmNewPasswordError);
    setPasswordMatchError("");

    return !(confirmPasswordError || confirmNewPasswordError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      console.log("Valid form");

      // Here you can navigate to the desired route
    } else {
      console.log("Invalid form");
    }
  };

  return (
    <div className="container-fluid" >
    <div className="auth-wrapper d-flex flex-row justify-content-space-around">
      <div className="auth-inner">
        <div className=''></div>
    <form onSubmit={handleSubmit}>
      <h3>Forget Password</h3>
      <div className="mb-3">
        <label>Confirm Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p style={{ color: "red" }}>{confirmPasswordError}</p>
      </div>
      <div className="mb-3">
        <label>Confirm New Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          autoComplete="new-password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
        <p style={{ color: "red" }}>{confirmNewPasswordError}</p>
      </div>
      <p style={{ color: "red" }}>{passwordMatchError}</p>
      <div className="d-grid">
        <button type='submit' className="btn btn-primary" disabled={passwordMatchError !== ""}>
          <Link to="/sign-up" style={{ color: 'white', textDecoration: 'none' }}>Return To Login</Link>
        </button>
      </div>
      
    </form>
    </div>
    <div className='col-md-6'>
    <img src={imageSrc} alt="Your Image" className="img-fluid" width= "500px" style={{ margin:"70px",height: "400px", borderRadius: "20px" }} />
    </div>
    </div>
   </div>
  );
};

export default Forget;
