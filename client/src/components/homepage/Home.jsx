import React from "react";
import "../../styles/home/Home.css";
import Footer from "../footer/Footer";
import FirstPart from "../part_1/FirstPart";
import SecondPart from "../part_2/SecondPart";
import ThirdPart from "../part_3/ThirdPart";
import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";
const print = () => {
  const string = renderToString(
    <div id="sign">
      <div>Teachers Signture</div>
      <div>Parents Signature</div>
      <div>Principle Signature</div>
    </div>
  );
  const pdf = new jsPDF("p", "mm", "a4");

  pdf.fromHTML(string);
  pdf.save("pdf");
};
function Home() {
  return (
    <div id="container">
      <div id="heading1">First Terminal Examination 2018-19</div>
      <div id="heading2">ACADEMIC PERFORMANCE</div>

      <div id="section">
        <div className="box1">
          <FirstPart />
        </div>
        <div className="box2">
          <SecondPart />
        </div>
      </div>
      <div>
        <ThirdPart />
      </div>
      <div id="cgp">
        <div className="cgp_name">C.P.G : 9.7</div>
        <div className="cgp_name">Grade : A1</div>
      </div>
      <span id="remark">Teacher Remarks-</span>
      <span id="exce">Excellent</span>
      <div id="sign">
        <div>Teachers Signture</div>
        <div>Parents Signature</div>
        <div>Principle Signature</div>
      </div>
      <div>
        <Footer />
      </div>
      <button onClick={print}>print</button>
    </div>
  );
}

export default Home;
