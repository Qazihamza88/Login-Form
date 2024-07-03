import React from 'react';
import logo from '../Images/logo-shape-orange-dark.svg';

function Needhelp() {
  return (
    <div style={{ 
      backgroundColor:'#f78a3e',
      backgroundImage: `url(${logo})`,
      backgroundSize: "80%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      position: "relative",
      height: "230px",
      textAlign: "center"
    }}>
      <div style={{ 
        position: "absolute",
        top: "50%",
        left: "0",
        transform: "translateY(-50%)",
        color: "#ffffff",
        width: "100%", // Set the width to 100% to ensure full width
        display: "flex", // Use flexbox for layout
        justifyContent: "space-around", // Spread items to the sides
        padding: "0 20px" // Add padding to create space between items and edges
      }}>
        <h1 style={{ margin: "0"  }}>Need Help?</h1>
        <button style={{ 
          padding: "10px 20px", 
          borderRadius: "5px", 
          backgroundColor: "#ffffff", 
          color: "#f78a3e", 
          border: "none", 
          cursor: "pointer", 
          background: "transparent",
          borderColor: "#fff",
          color: "#fff",
          border: "1px solid white",
          borderRadius: "24px",
          padding: "5px 25px"
        }}>
          Help and Support
        </button>
      </div>
    </div>
  )
}

export default Needhelp;
