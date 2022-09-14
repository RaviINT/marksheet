import React from "react";
import "../../styles/footer/Footer.css";
import Table from "react-bootstrap/Table";
function Footer() {
  return (
    <div>
      <div id="foot_head">
        <span className="single_head">G</span>
        <span>RADING </span>
        <span className="single_head">S</span>
        <span>CALE</span>
      </div>

      <div id="table_box">
        <Table
          striped
          bordered
          hover
          size="sm"
          className="table-responsive border border-dark"
        >
          <thead>
            <tr>
              <th>MARKS RANGE</th>
              <th>GRADES</th>
              <th>REMARKS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black" }}>91-100</td>
              <td style={{ border: "1px solid black" }}>A1</td>
              <td>Excellent</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>81-90</td>
              <td style={{ border: "1px solid black" }}>A2</td>
              <td>Very Good</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>71-80</td>
              <td style={{ border: "1px solid black" }}>B1</td>
              <td>Good</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>61-70</td>
              <td style={{ border: "1px solid black" }}>B2</td>
              <td>Average</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>51-60</td>
              <td style={{ border: "1px solid black" }}>C1</td>
              <td>Need to study</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>51-60</td>
              <td style={{ border: "1px solid black" }}>C2</td>
              <td>Poor</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>Below 40</td>
              <td style={{ border: "1px solid black" }}>D</td>
              <td>Fail / Poor</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div id="foot_heading">Our Parents are seen god on the earth</div>
    </div>
  );
}

export default Footer;
