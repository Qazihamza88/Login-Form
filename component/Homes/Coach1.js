import React ,{useState} from 'react';
import  Image  from '../Images/home-img-13.png';
import  Image1 from '../Images/img-01.png';
import  Image2 from '../Images/img-02.png';

function Coach1() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };
  return (
    <div style={{backgroundColor:"#1b51c4" ,paddingTop:"5rem",paddingBottom:"5rem"}}>
         <div className="container">
      <div className="row">
        {/* Left side with large text */}
        <div className="col-md-6">
        <img
            src={Image}
            alt="Image"
            style={{ maxWidth: "25rem", height: "auto" }}
          />     
        </div>
        <div className="col-md-6">
            <div style={{textAlign:"left", color:"white",paddingTop:"115px", paddingBlock:"30px",width:"650px"}}> 
            <h2 style={{fontFamily:"'Source Serif Pro', serif",fontSize:"3rem",fontWeight:"600" }}> You are a Coach? Reach<br/> million of clients with<br/> your coach-profile. </h2>
            </div>
            <button
            style={{
              display: "flex",
            //   alignItems: "center",
              justifyContent: "start",
              textAlign: "center",
              columnGap: "0.5rem", // Adjusted property name and value
              fontSize: "18px",
              color: "white",
              lineHeight: "1.2", // Adjusted property name
              fontWeight: "600",
              backgroundColor: "transparent",
              border: "1px solid white",
              borderRadius: "25px",
              padding: "8px 32px",
              textDecoration: "none", 
            }}>
          Coachpool for Coaches
          </button>
          <div
            style={{
              width: '200px',
              height: '200px',
              perspective: '1000px',
              position: "relative",
              top: "-20%", // Adjust as needed to position vertically
              right: "0%",
              left:"70%" ,
              // bottom:"20%"
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div
              style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center",
                textAlign:"center",
                width: '100%',
                height: '100%',
                // position :"relative",
                // bottom:"110px",
                // left:"400px",
                backfaceVisibility: 'hidden',
                transition: 'transform 0.5s ease',
                transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)',
              }}
            >
              {
               isFlipped ? (
                <div style={{ width: '100%', height: '100%', transform: 'rotateY(180deg)'}}>
                  <img src={Image2} alt="Front Image" style={{ width: '115%', height: '115%' }} />
                  <div style={{ position: 'relative', bottom: '70%', left: '60%',lineHeight:"1.2" ,transform: 'translate(-50%, -50%)',alignItems:"center", color: 'Black'}}>
                    <p style={{fontSize:"14px",marginTop:"35px", marginBottom:"5px" }}>Entering this code in the </p> 
                    <p style={{fontSize:"14px", marginBottom:"5px"}}>Payment process will give you </p> 
                    <p style={{fontSize:"14px", marginBottom:"5px"}}>a 100% discount on the</p>
                    <p style={{fontSize:"14px", marginBottom:"5px"}}>monthly fee for 1 year.</p> 
                    <p style={{fontSize:"14px", marginBottom:"5px"}}>Limited offer!</p> 
                    <p style={{fontSize:"14px", marginBottom:"5px"}}>Redeemable until</p> 
                    <p style={{fontSize:"14px", marginBottom:"5px"}}>Jun-30-2024</p> 
                    
                  </div>
                </div>
              ) : (
                <div style={{ width: '100%', height: '100%', transform: 'rotateX(360deg)' }}>
                  <img src={Image1} alt="Back Image" style={{ width: '115%', height: '115%' }} />
                  <div style={{ position: 'relative', bottom: '60%', left: '60%',lineHeight:"1", transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'black',padding:"10px" }}>
                    <h5>1 YEAR</h5>
                      <h5>Free </h5> 
                    <h6 style={{fontWeight:"300"}}>First 300 Users </h6>
                    <h6 style={{fontWeight:"300"}}>Code </h6> 
                     <h5>CP-AEXD56</h5> 
                  </div>
                </div>
    )
  } 
  </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Coach1
