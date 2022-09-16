import React, { useRef } from "react";
import { Home } from "./components/homepage/Home";
import html2pdf from "html2pdf.js";
import { useReactToPrint } from "react-to-print";
function App() {
  const generatePDF = () => {
    const source = document.getElementById("homepageId");
    const fileName = "xyz.pdf";
    var opt = {
      margin: 0.2,
      filename: fileName,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 8 },
      jsPDF: { unit: "in", format: "A4", orientation: "landscape" },
    };

    html2pdf().set(opt).from(source).save();
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Home ref={componentRef} />
      <div className="print_download_btn_div">
        <button onClick={handlePrint}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-printer-fill"
            viewBox="0 0 16 16"
          >
            <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
            <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
          </svg>
          Print
        </button>

        <button onClick={generatePDF}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-file-earmark-arrow-down"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
          </svg>
          Download
        </button>
      </div>
    </>
  );
}

export default App;
