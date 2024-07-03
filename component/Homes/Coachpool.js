import React from 'react'
import Norisk from '../Images/box-icon-5.svg'
import Data  from '../Images/box-icon-6.svg'
import Work from '../Images/box-icon-7.svg'
import Indep from '../Images/box-icon-8.svg'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Coachpool() {
  return (
    <div style={{ padding: "80px 30px", margin:"92px 0px" }}>
      <div style={{ fontSize: "48px" ,paddingBottom:"40px" }}>
        <h1>Why Coachpool?</h1>
      </div>
      <div style={{padding:"0px 30px"}}>
      {/* Main row */}
      <div className="row">
        {/* Left side 1 */}
        <div className="col-md-6">
          <div style={{ display: 'flex', marginBottom: '10px',justifyContent:"center" }}>
            <div>
              <img src={Norisk} alt="" style={{ width: '56px' }} />
            </div>
            <div style={{ padding: "5px 17px" }}>
              <h5 style={{ textAlign: "left" ,fontSize:"1.25rem" }}>No Risk</h5>
              <p style={{ fontSize: "16px", textAlign: "left" }}>Coachpool is free for coachees. You just pay for the sessions <br />
                with your coach. Take your time to find exactly the right <br />
                coach. Compare, talk to your coach, book your session once<br />
                you’re sure!</p>
            </div>
          </div>
        </div>

        {/* Right side 1 */}
        <div className="col-md-6">
          <div style={{ display: 'flex',marginBottom: '10px',justifyContent:"center" }}>
            <div>
              <img src={Data} alt='' style={{ width: '56px' }} />
            </div>
            <div style={{ padding: "5px 17px" }}>
              <h5 style={{ textAlign: "left" ,fontSize:"1.25rem" }}>Your data are secure</h5>
              <p style={{ fontSize: "16px", textAlign: "left" }}
              >We worry about the security of your your personal data.Our servers<br />
                are located in Germany. Our software has specifically<br />
                been developed in the EU.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary row */}
      <div className="row" style={{paddingBottom:"55px" }}>
        {/* Left side 2 */}
        <div className="col-md-6">
          <div style={{ display: 'flex',  marginBottom: '10px',justifyContent:"center" }}>
            <div>
              <img src={Work} alt="" style={{ width: '56px' }} />
            </div>
            <div style={{ padding: "5px 17px" }}>
              <h5 style={{ textAlign: "left",fontSize:"1.25rem"  }}>Work easily with coaches</h5>
              <p style={{ fontSize: "16px", textAlign: "left" }}>Coachpool offers all you need for the perfect coaching in one<br />
                place: Find your coach - have your session - online payment <br />
                and rating. Simple and easy!</p>
            </div>
          </div>
        </div>

        {/* Right side 2 */}
        <div className="col-md-6">
          <div style={{ display: 'flex',  marginBottom: '10px',justifyContent:"center" }}>
            <div>
              <img src={Indep} alt="" style={{ width: '56px'}} />
            </div>
            <div style={{ padding: "5px 17px" }}>
              <h5 style={{textAlign: "left" ,fontSize:"1.25rem" }}>Independent</h5>
              <p style={{ fontSize: "16px", textAlign: "left" }}>Coachpool is an open and independent platform.<br />
              Any coach can register. We offer a wide choice of specialized coaches. Any coach</p>
            </div>
          </div>
        </div>
      </div>
       </div>
       <h5> Learn more accout coach  <FontAwesomeIcon icon={faArrowRight}/></h5>
    </div>

  )
}

export default Coachpool
