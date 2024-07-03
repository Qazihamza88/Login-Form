import React from "react";
import Image from "../Images/home-img-14.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Coach from "./Coach";

function Home2() {
  return (
    <div style={{ backgroundColor: "#f7f6f5", margin: "150px 0px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" ,margin:"60px" }}>
          <div>
          <h1 style={{fontFamily:"'Source Serif Pro', serif",textAlign:"start",
           fontSize:"3rem", fontWeight:"600", marginBottom:"1rem",lineHeight:"1.2"
           , letterSpacing:"0.2rem"}}>What is bothering you?</h1>
          <h6 style={{fontSize:"16px", fontWeight:"400" ,textAlign:"start"}}>
          Job, family, Relationship: Coachpool has the right coach for any issue.
          </h6>
          </div>
          <div
            style={{flex: 1,padding: "10px",display: "flex",flexDirection: "column",gap: 10}}>
            <div
              style={{display: "flex",flexWrap:"wrap",gap:"1rem"}}>
              <div
                style={{fontSize: "1rem",fontWeight: 400,lineHeight: 1.5,color: "#000",
                  background:
                    "linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #FF7116, #E8169E) border-box",
                  border: "1px solid transparent",
                  borderRadius: "2rem",
                  width: "15%",
                  display:"flex",
                  justifyContent:"center",
                  padding :"13px 23px 13px 23px",
                  height:"55px"
                }}
              >
                Family
              </div>
              <div
                style={{
                  display: "inline-block",
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  padding: "9px  15px",
                  color: "#000",
                  background:
                    "linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #FF7116, #E8169E) border-box",
                  border: "1px solid transparent",
                  borderRadius: "2rem",
                  width: "12%",
                  height:"45px",

                }}
              >
                Job
              </div>
              <div
                style={{
                  display: "inline-block",
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  padding: "9px  10px",
                  color: "#000",
                  background:
                    "linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #FF7116, #E8169E) border-box",
                  border: "1px solid transparent",
                  borderRadius: "2rem",
                  width: "22%",
                  height:"45px",

                }}
              >
                Inner conflicts
              </div>
              <div
                style={{
                  display: "inline-block",
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  padding: "9px 13px",
                  color: "#000",
                  background:
                    "linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #FF7116, #E8169E) border-box",
                  border: "1px solid transparent",
                  borderRadius: "2rem",
                  width: "18%",
                  height:"45px",

                }}
              >
               Nutrition
              </div>
              <div
                style={{
                  display: "inline-block",
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  padding: "9px 13px",
                  color: "#000",
                  background:
                    "linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #FF7116, #E8169E) border-box",
                  border: "1px solid transparent",
                  borderRadius: "2rem",
                  width: "22%",
                  height:"45px",}}>
                Emigration
              </div>
            </div>
            <div style={{display: "flex",
                flexWrap:"wrap",
                gap:"1rem" }}>
              <div
                style={{
                  display: "inline-block",
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  padding: "9px  11px",
                  color: "#000",
                  background:
                    "linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #FF7116, #E8169E) border-box",
                  border: "1px solid transparent",
                  borderRadius: "2rem",
                  width: "19%",
                  height:"45px",

                }}
              >
                Child wish
              </div>
              <div
                style={{
                  display: "inline-block",
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  padding: "9px  12px",
                  color: "#000",
                  background:
                    "linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #FF7116, #E8169E) border-box",
                  border: "1px solid transparent",
                  borderRadius: "2rem",
                  width: "25%",
                  height:"45px",

                }}
              >
              Life-coaching 
              </div>
              <div
                style={{
                  // display: "inline-block",
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  padding: "9px  10px",
                  color: "#000",
                  background:
                    "linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #FF7116, #E8169E) border-box",
                  border: "1px solid transparent",
                  borderRadius: "2rem",
                  height:"45px",
                  width: "16%",
                }}
              >
               Divorce
              </div>
            </div>
            <div style={{ display: "flex",
                flexWrap:"wrap",
                gap:"1rem" }}>
              <div
                style={{
                  display: "inline-block",
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  padding: "9px ",
                  color: "#000",
                  background:
                    "linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #FF7116, #E8169E) border-box",
                  border: "1px solid transparent",
                  borderRadius: "2rem",
                  width: "33%",
                  height:"45px",

                }}
              >
                Work-/Life-Balance
              </div>
              <div
                style={{
                  display: "inline-block",
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  padding: "9px  10px",
                  color: "#000",
                  background:
                    "linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #FF7116, #E8169E) border-box",
                  border: "1px solid transparent",
                  borderRadius: "2rem",
                  width: "36%",
                  height:"45px",

                }}
              >
                Finding your profession
              </div>
              {/* Add more buttons similarly */}
            </div>
            <div style={{display: "flex",
                flexWrap:"wrap",
                gap:"1rem"}}>
              <div
                style={{
                  display: "inline-block",
                  fontSize: "1rem",
                  // fontWeight: 400,
                  lineHeight: 1.5,
                  padding: "9px ",
                  color: "#000",
                  background:
                    "linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #FF7116, #E8169E) border-box",
                  border: "1px solid transparent",
                  borderRadius: "2rem",
                  width: "28%",
                  height:"45px",

                }}
              >
              Personal costs
              </div>
            </div>
          </div>
          <div>
            <div>

          <h6 style={{fontSize:"20px", fontWeight:"400" ,display:"flex" ,justifyContent:"start",paddingLeft:"20px",paddingTop:"20px"}}>
          Your issue is not listed?
          </h6>
            </div>
            <div>
              <button
            style={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "start",
                textAlign: "center",
                fontSize: "1.3rem",
                // color: "#000",
                // lineHeight: "1.5", // Adjusted property name
                // fontWeight: "500",  
                backgroundColor: "transparent",
                border: "none",
                // borderRadius: "0",
                // padding: "0",
                textDecoration: "none"}}>
             <span style={{ marginRight: '0.5rem',paddingTop:"10px",paddingLeft:"14px" }}>The Coaches Finder has more</span> {/* Adding margin to the right side of the text */}
             <FontAwesomeIcon icon={faArrowRight}/>
          </button>
            </div>

          </div>
        </div>
        <div style={{ flex: "1", padding: "90px 10px" }}>
          <img
            src={Image}
            alt="Image"
            style={{ maxWidth: "28rem", borderRadius: "2rem", height: "auto" }}
          />
        </div>
      </div>
      <Coach/>
    </div>
  );
}

export default Home2;