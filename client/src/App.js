import React, { useRef } from "react";
import { Home } from "./components/homepage/Home";

import { useReactToPrint } from "react-to-print";
function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Home ref={componentRef} />
      <div
        className="print_download_btn_div"
        id="element-to-hide"
        data-html2canvas-ignore="true"
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button onClick={handlePrint}>Print</button>
      </div>
    </>
  );
}

export default App;
