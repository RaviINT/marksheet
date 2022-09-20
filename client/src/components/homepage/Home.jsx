import React, { forwardRef } from "react";
import "../../styles/home/Home.css";
import Footer from "../footer/Footer";
import FirstPart from "../part_1/FirstPart";
import SecondPart from "../part_2/SecondPart";
import ThirdPart from "../part_3/ThirdPart";
import { useSelector } from "react-redux";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
export const Home = forwardRef(( ref) => {
  const { grade, remarks } = useSelector((state) => state.CardReducer);

  return (
    <div id="container" ref={ref}>
      <div id="heading1">First Terminal Examination 2018-19</div>
      <div id="heading2">ACADEMIC PERFORMANCE</div>

      <div id="section">
        <div className="box1" >
          <FirstPart />
        </div>
        <div className="box2" >
          <SecondPart />
        </div>
      </div>
      <hr />
      <div>
        <ThirdPart />
      </div>
      <div id="cgp">
        {/* <div className="cgp_name">C.P.G : 9.7</div> */}
        <div className="cgp_name">Grade : {grade}</div>
        <div>
          <span id="remark">Teacher Remarks-</span>
          <span id="exce">{remarks}</span>
        </div>
      </div>

      <div id="sign">
        <div className="imgBox">
          <img src={img1} alt="" className="img" />

          <div style={{ textAlign: "center" }}>Teachers Signture</div>
        </div>
        <div className="imgBox">
          <img src={img2} alt="" className="img" />

          <div style={{ textAlign: "center" }}>Parents Signature</div>
        </div>
        <div className="imgBox">
          <img src={img3} alt="" className="img" />

          <div style={{ textAlign: "center" }}>Principle Signature</div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
});
Home.displayName = "Home";
