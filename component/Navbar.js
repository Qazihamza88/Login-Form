import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Plogo from './Images/logo.svg';

function Navbar() {
  return (
    <div style={{ }}>
      <nav
        style={{
          paddingTop:"2rem",
          paddingBottom:"2rem",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          height: "110px",
          paddingLeft:"20px"
        }}>
        <div style={{ width: "240px",display:"flex",justifyContent:"start" }}>
          <img 
            alt=""
            src={Plogo}
            style={{ width: "136px", height: "40px"}}
          />
        </div>
        {/* <div style={{  listStyleType: 'none',
    padding: "0",
    margin: 0,
    display: flex,
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    column-gap: 1.5rem; }}> */}
    <div style={{listStyleType:"none",paddingLeft:"45px",margin:"0",display:"flex",flexDirection:"row",
     alignItems:"center",justifyContent:"flex-end",columnGap:"1.5rem"}}>
          {/* <button style={{ marginRight: '20px', border:'none', textDecoration: 'none', color: '#333' }}>About Coachpool</button> */}
          <button
            style={{
              display: "inlineFlex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              columnGap: "0.5rem", // Adjusted property name and value
              fontSize: "1rem",
              color: "#000",
              lineHeight: "1.5", // Adjusted property name
              fontWeight: "500",
              position: "relative",
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "0",
              padding: "0",
              textDecoration: "none", // Adjusted property name
            }}
          >
            About Coachpool
          </button>

          <button
            style={{
              display: "inlineFlex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              columnGap: "0.5rem", // Adjusted property name and value
              fontSize: "1rem",
              color: "#000",
              lineHeight: "1.5", // Adjusted property name
              fontWeight: "500",
              position: "relative",
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "0",
              padding: "0",
              textDecoration: "none",
            }}
          >
            Coaching works
          </button>
          <button
            style={{
                display: "inlineFlex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                columnGap: "0.5rem", // Adjusted property name and value
                fontSize: "1rem",
                color: "#000",
                lineHeight: "1.5", // Adjusted property name
                fontWeight: "500",
                position: "relative",
                backgroundColor: "transparent",
                border: "none",
                borderRadius: "0",
                padding: "0",
                textDecoration: "none"}}>
             <span style={{ marginRight: '0.5rem' }}>For coaches</span> {/* Adding margin to the right side of the text */}
             <FontAwesomeIcon icon={faArrowRight}/>
          </button>
          <button
            style={{
              background: "linear-gradient(135deg, #FF7116, #E8169E, #FF7116)",
              color: "#fff",
              border: "none",
              padding: "0px 30px",
              height: "2.5rem",
              borderRadius: "1.25rem",
              cursor: "pointer",
            }}>
            <Link to="sign-in" style={{textDecoration:"none",
          color:"white",backgroundColor: "linear-gradient(135deg, #FF7116, #E8169E, #FF7116)" }}> Login </Link> 
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            🌐
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
