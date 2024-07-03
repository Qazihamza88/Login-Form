import React from 'react'
import image from '../Images/home-img-11.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

function Home1() {
  return (
    <div style={{marginTop:"180px" ,marginBottom:"100px"}}>
        <div className='row' style={{margin:"0px"}}>
            <div className='col-md-6'>  
       <div style={{ display: 'flex', alignItems: 'center' , position:"relative" }}>
        <div style={{display:"flex",justifyContent:"center" }}>
            <img src={image} alt="Image" style={{ width: '55%',borderRadius:"20px"}} />
        </div>      
            <div style={{position:"absolute" ,top:"215px" ,zIndex:"2" ,border:"1px solid gray",height:"110px",display:"flex",justifyContent:"start",marginLeft:"18rem",borderRadius:"5rem",padding:"1.5rem 2rem",borderBottomRightRadius:"0" ,color:"#2F2F2F",backgroundColor:"white",width:"45%" }}>
                <p style={{fontSize:"18px" ,textAlign:"left"}}>Have you ever tried
                <br/> coaching?</p>
            </div>
            <div style={{position:"absolute" , bottom:"30px" , zIndex:"2",border:"1px solid gray", height:"110px",display:"flex",justifyContent:"start",marginLeft:"23rem",borderRadius:"5rem",padding:"1.5rem 2rem",borderTopLeftRadius:"0" ,color:"#2f2f2f",backgroundColor:"white",width:"40%"}}>
                <p style={{fontSize:"18px" ,textAlign:"left"}}>Your coach can help you <br/> reach your goals.</p></div>
        </div>
        </div>
        <div className='col-md-6'>
        <div style={{ display:"flex" ,textAlign:"left" }}>
        <h2 style={{fontFamily: "'Source Serif Pro', serif",fontSize:"3rem",lineHeight:"1.1",fontWeight:"600",paddingTop:"60px",letterSpacing:"3px",marginBottom:"20px"}}>Coach-Pool is an<br/>independent social<br/>network for coachees<br/>and coaches.</h2>
      </div>
      <div style={{display:"flex",paddingTop:"15px" ,paddingLeft:"5px"}}>
        <span><h5>Learn more</h5></span>
        <FontAwesomeIcon icon={faArrowRight} style={{padding:"5px 15px" }}/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Home1
