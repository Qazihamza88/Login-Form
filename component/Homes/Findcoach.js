import React from 'react'

function Findcoach() {
  return (
    <div style={{marginTop:"100px",paddingBottom:"30px" }}>
      <h1 style={{fontSize:"3rem", fontFamily:"'Source Serif Pro',serif" ,fontWeight:"600",marginBottom:"2rem"}}>Find your coach now</h1>
      <p style={{color:"2F2F2F"}}>We'll help you find the right coach.</p>
      <button 
      style={{
        background: "linear-gradient(135deg, #FF7116, #E8169E, #FF7116)",
        color: "#fff",
        padding: "0px 30px",
        height: "2.5rem",
        borderRadius: "1.25rem",
        cursor: "pointer",border:"none",marginTop:"15px"}}
      >Find Coach</button>
    </div>
  )
}

export default Findcoach
