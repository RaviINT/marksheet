import React, { useRef } from "react";
import { Home } from "./components/homepage/Home";
import { AiFillPrinter } from "react-icons/ai";
import { useReactToPrint } from "react-to-print";
import html2pdf from "html2pdf.js";
import "./App.css";
import Login from "./components/login/Login";
import { Routes, Route } from "react-router-dom";
function App() {
  const token = localStorage.getItem("loginToken");
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const generatePDF = () => {
    const source = document.getElementById("container");
    const fileName = "ravi.pdf";
    var opt = {
      margin: 0.2,
      filename: fileName,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 8 },
      jsPDF: { unit: "in", format: "A4", orientation: "landscape" },
    };

    html2pdf().set(opt).from(source).save();
  };
  function HomeComp() {
    return (
      <>
        <div
          className="print_download_btn_div"
          id="element-to-hide"
          data-html2canvas-ignore="true"
        >
          <AiFillPrinter
            onClick={handlePrint}
            size={20}
            color="black"
            style={{ cursor: "pointer" }}
          />
        </div>
        <Home ref={componentRef} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <button onClick={generatePDF}>Download</button>
        </div>
      </>
    );
  }
  return (
    <>
      <Routes >
        {token ? (
          <Route  path="/dashboard" element={<HomeComp />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </>
  );
}

export default App;
