import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faIcon } from '@fortawesome/free-solid-svg-icons';
import imageSrc from '../Images/search-img-01.png';
// import imageSrc1 from './Images/search-img-02.png';
import { faCheck,  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Home = () => {
    const styles = {
        container: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        left: {
          width: '40%',
          textAlign: 'center',
        },
        right: {
          width: '40%',
          position: 'relative',
        },
        image: {
          width: '100%',
          height: 'auto',
          display: 'block',
        },
        textOnImage: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '24px',
          textAlign: 'center',
        },
        inputFields: {
          width: '100%',
          textAlign: 'center',
        },
      };
      
  return (
    <div className="container" style={{width:"auto"}}>
      <div className="row">
        {/* Left Side */}
        <div className="col-md-6" style={{paddingRight:"25px",marginLeft:"-25px"}}>
          <h1 style={{fontFamily:"Source Serif Pro, serif" ,fontSize:"3rem", fontWeight:"600",lineHeight:"1.2",marginRight:"180px",marginTop:"60px"}}>Find Your Coach</h1>
          <div style={{ display:"flex", alignItems:"center" ,paddingTop:"20px"}}>
            <FontAwesomeIcon icon={faCheck} style={{ color: '#f78a3e',fontSize:"2rem" }} />
            <span style={{ marginLeft: '15px',marginRight:'15px' ,fontSize:'1.5rem',fontWeight:"300" }}>Simple</span>
            <FontAwesomeIcon icon={faCheck} style={{ color: '#f78a3e' , marginLeft: '10px',fontSize:"2rem" }} />
            <span style={{ marginLeft: '15px',marginRight:'15px' ,fontSize:'1.5rem',fontWeight:"300"}}>Dynamic</span>
            <FontAwesomeIcon icon={faCheck} style={{ color: '#f78a3e', marginLeft: '10px',fontSize:"2rem" }} />
            <span style={{ marginLeft: '15px' ,fontSize:'1.5rem',fontWeight:"300"}}>Free</span>
            </div>
            </div>
        {/* Right Side */}
        <div className="col-md-6">
          <img src={imageSrc} alt="Home Image" width={"560px"} height={"410px"} style={{marginLeft:"30px",position:'relative'}} />
        </div>
      </div>
      {/* Card */}
      {/* <div className="row"> */}
          <div className="card" style={{width:"876px",height:"215px",borderRadius:"15px" ,position:"absolute",right:"715px",top:"430px",backgroundColor:"#f7f6f5"}}>
            <div className="card-body">
              <div style={{ display: "flex", alignItems: "center" }}>
             <div>
            <label for="inputEmail4" className="form-label" style={{position:"relative",left:"-145px", width:"250px"}}>Descipline</label>
            <input type="email" className="form-control" id="inputEmail4"  style={{width:"370px",height:"60px",marginLeft:"15px"}} placeholder='I`m loocking for a Coach' />
        </div>
        <div>
            <label for="inputPassword4" className="form-label" style={{position:"relative",right:"60px"}}>Where?</label>
            <input type="password" className="form-control" id="inputPassword4"  style={{width:"280px",height:"60px",marginLeft:"15px"}}placeholder='ZIP or City'/>
        </div>
        <button type="button" className="btn btn-primary" style={{ alignItems:"center",marginLeft: "20px",borderRadius:"25px",marginTop:"45px" ,width:"120px" ,paddingTop:"0.5rem",paddingBottom:"0.3rem",background: "linear-gradient(135deg, #FF7116, #E8169E, #FF7116) "}}>
           <h5>Search</h5></button>
             
        </div>
        <div style={{display:"flex", justifyContent:"start",paddingLeft:"25px"}}>  
           <p style={{marginRight:"300px",marginTop:"40px"}}>Not Sure What to look for? We can help you with our <Link to="/Coach" style={{color:"black"}}> Coach Finder </Link></p>
         </div>
         </div>
        </div>
       </div>
  );
};

export default Home;
