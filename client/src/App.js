import React, { useRef } from "react";
import { Home } from "./components/homepage/Home";
import { AiFillPrinter } from "react-icons/ai";
import { useReactToPrint } from "react-to-print";
function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <div
        className="print_download_btn_div"
        id="element-to-hide"
        data-html2canvas-ignore="true"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          position: "absolute",
          right: "17%",
          top: "8px",
        }}
      >
        <AiFillPrinter
          onClick={handlePrint}
          size={20}
          color="black"
          style={{ cursor: "pointer" }}
        />
        {/* <button >Print</button> */}
      </div>
      <Home ref={componentRef} />
    </>
  );
}

export default App;
