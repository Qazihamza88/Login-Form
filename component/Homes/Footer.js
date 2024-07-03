import React from "react";
import logo from '../Images/logo-light.svg' 

function Footer() {
  return (
    <footer style={{ backgroundColor: "#2f2f2f", padding: "50px 0" }}>
      <div className="container">
        <div className="row">
          {/* First Column */}
          <div className="col-md-3 footer-column" style={{ textAlign:"left"}}>
            <img src={logo} alt="logo" width={124}/>
            <h6 style={{color:"#fff"}}>Go on with us</h6>
          </div>

          {/* Second Column */}
          <div className="col-md-3" style={{textAlign:"left",lineHeight:"1.8"}}>
            <h5 style={{color:"#fff"}}>For Choachees</h5>
            <hr style={{ borderTop: "1px solid white", marginBottom: "5px" }} />
            <ul style={{ listStyleType: "none", padding: 0 }}>
            <li><a href="#" style={{ color:"white",textDecoration:"none"}} >Find Coach</a></li>
            <li><a href="#" style={{ color:"white",textDecoration:"none"}} >Coaching-issues</a></li>
            <li><a href="#" style={{ color:"white",textDecoration:"none" }}>Casts for Choachees</a></li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="col-md-3" style={{textAlign:"left",lineHeight:"1.8"}}>
            <h5 style={{color:"#fff"}}>For choaches</h5>
            <hr style={{ borderTop: "1px solid white", marginBottom: "5px" }} />
            <ul style={{ listStyleType: "none", padding: 0 }}>
            <li><a href="#" style={{ color:"white",textDecoration:"none"}} >Register as Coach</a></li>
            <li><a href="#" style={{ color:"white",textDecoration:"none"}} >Pricingfor Coaches</a></li>
            <li><a href="#" style={{ color:"white",textDecoration:"none" }}>Tools for your Business</a></li>
            <li><a href="#" style={{ color:"white",textDecoration:"none" }}>Tips for Coaches </a></li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div className="col-md-3" style={{textAlign:"left",lineHeight:"1.8" }}>
            <h5 style={{color:"#fff"}}>information</h5>
            <hr style={{ borderTop: "1px solid white", marginBottom: "5px" }} />
            <ul style={{ listStyleType: "none", padding: 0 }}>
            <li><a href="#" style={{ color:"white",textDecoration:"none" }}>About Coachpool</a></li>
            <li><a href="#" style={{ color:"white",textDecoration:"none" }}>FAQ</a></li>
            <li><a href="#" style={{ color:"white",textDecoration:"none" }}>Contact</a></li>
            <li><a href="#" style={{ color:"white",textDecoration:"none" }}>Cacel Form</a></li>
             
            </ul>
          </div>
        </div>
      </div>
      <hr style={{ borderTop: "1px solid white", marginTop: "30px" }}/>
    </footer>
  );
}

export default Footer;
