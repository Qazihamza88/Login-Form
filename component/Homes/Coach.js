import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faArrowRight  } from '@fortawesome/free-solid-svg-icons';

function Coach() {
  return (
    <div className="container" style={{marginTop:"50px"}}>
    <div className="row" style={{paddingTop:"5rem", paddingBottom:"5rem"}}>
      {/* Left side with large text */}
      <div className="col-md-6">
        <h1 style={{fontSize:"3.5rem",fontFamily:"'Source Serif Pro', serif" , textAlign:"start",fontWeight:"bold"}}>Coaching is right for<br/> you, if…</h1>
        {/* Your large text content goes here */}
      </div>

      {/* Right side with font awesome arrow */}
      <div className="col-md-6" >
        {/* <FontAwesomeIcon icon={faArrowRight} />
        <span>You want to give your career a push.</span>  */}
            <div style={{ display:"flex", alignItems:"center" ,paddingTop:"20px"}}> 
            <FontAwesomeIcon icon={faCheck} style={{ color: '#d63170',fontSize:"24px" ,paddingLeft:"10px"}} />
            <span style={{ marginLeft: '15px',marginRight:'15px' ,fontSize:"20px",fontWeight:"300" }}>You want to give your career a push.</span>
            </div>
            <div style={{textAlign:"start"}}> 

            <div style={{ display:"flex", alignItems:"center" ,paddingTop:"20px"}}>
            <FontAwesomeIcon icon={faCheck} style={{ color: '#d63170' , marginLeft: '10px',fontSize:"24px" }} />
            <span style={{ marginLeft: '15px',marginRight:'15px' ,fontSize:"20px",fontWeight:"300"}}>You face changes in your job.</span>
            </div>
            <div style={{ display:"flex", alignItems:"center" ,paddingTop:"20px"}}>
            <FontAwesomeIcon icon={faCheck} style={{ color: '#d63170',paddingLeft: "10px",paddingBottom:"35px",fontSize:"24px" }} />
            <span style={{ marginLeft: '15px' ,fontSize:"20px",fontWeight:"300"}}>You want to tackle issues in your relationship before they grow.</span>
            </div>
            <div style={{ display:"flex", alignItems:"center" ,paddingTop:"20px"}}>
            <FontAwesomeIcon icon={faCheck} style={{ color: '#d63170', paddingLeft: '10px',paddingBottom:"35px",fontSize:"24px" }} />
            <span style={{ marginLeft: '15px' ,fontSize:"20px",fontWeight:"300"}}>You need to discuss an issue which is too personal to talk to friends about.</span>
            </div>
            <div style={{ display:"flex", alignItems:"center" ,paddingTop:"20px"}}>

            <FontAwesomeIcon icon={faCheck} style={{ color: '#d63170' ,paddingLeft: "10px",fontSize:"24px" }} />
            <span style={{ marginLeft: '15px',marginRight:'15px' ,fontSize:"20px",fontWeight:"300"}}>You need an outside view about raising your kids.</span>
            </div>
            <div style={{textAlign:"start" ,paddingTop:"40px" ,paddingLeft:"15px"}}> 
            <h6>Coaching is no one-fits-all solution</h6>
            <p style={{fontSize:"16px"}}>Sometimes a coaching cannot be recommended…</p>
            <div style={{display:"flex"}}>
            <span><h6>Learn more</h6></span>
            <FontAwesomeIcon icon={faArrowRight} style={{padding:"5px 15px" }}/>
            </div>
            </div>   
            </div>
            </div>
    </div>
  </div>
  )
}

export default Coach
