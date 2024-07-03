import React from "react";
import background from "../Images/background.png";
import shape from "../Images/shape-pink.svg";
 
function Work() {
  return (
    <div style={{ margin: "0 50px 0 50px" }}>
      <div className="row">
        {/* Left side content */}
        <div className="col-sm-6">
            <div style={{paddingBottom:"20px"}}> 
          <div style={{ padding: "20px" }}>
            <h2 style={{margin: '100px 0px 0px 0px' ,alignItems:"left",fontSize:"3rem",fontFamily:"'Source Serif Pro', serif" ,fontWeight:"700",lineHeight:"1.2",textAlign:"left"}}>How does it <br/> Work?</h2>
          </div>
          <div style={{width:'600px',height:'auto',backgroundColor:'white',padding:'20px'
          ,borderRadius:'5px',boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',textAlign:"left"
          }}>
        <div style={{display: "flex",alignItems: "center" ,padding:"10px"}}>
        <span className="num"><img src={shape} alt="" />1</span>
        <h3 style={{ margin: '0', marginBottom: '10px', marginRight: "5px" }}>Find your coach</h3>
        </div>
        <p style={{ margin: '0',fontSize:"18px"}}>Our optimized search allows you to easily find the right coach.<br/>
         Coaches present themselves with meaningful profiles and <br/> 
         background information. This way you get to know the coach before <br/>
         your first meeting, so you can choose the right one</p>
    </div>
    </div>
        <div style={{display: "flex",alignItems: "center" ,padding:"20px"}}>
        <span className="num"><img src={shape} alt="" />2</span>
        <h3 style={{ margin: '0', marginBottom: '10px', marginRight: "5px" }}>Booking coaches</h3>
        </div>

        <div style={{display: "flex",alignItems: "center" ,padding:"20px"}}>
        <span className="num"><img src={shape} alt="" />3</span>
        <h3 style={{ margin: '0', marginBottom: '10px', marginRight: "5px" }}>Coaching sessions</h3>
        </div>
             
        <div style={{display: "flex",alignItems: "center" ,padding:"20px"}}>
        <span className="num"><img src={shape} alt="" />4</span>
        <h3 style={{ margin: '0', marginBottom: '10px', marginRight: "5px" }}>Pay and rate your coach</h3>
        </div>
      
        </div>
        <div className="col-md-6 ">
          <img
            src={background}
            alt="Right Side Image"
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </div>
      </div>
      {/* <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur non
        minima doloremque perspiciatis laborum. Inventore, at! Ratione ipsam
        voluptas perspiciatis? Unde, reprehenderit! Error, quidem itaque
        reprehenderit eaque asperiores vitae enim.
      </p> */}
    </div>
  );
}

export default Work;
