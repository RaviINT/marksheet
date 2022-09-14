import React from "react";
import "../../styles/part_3/ThirdPart.css";
import Table from "react-bootstrap/Table";
import data from "../../data/data.json";
function ThirdPart() {
  return (
    <div>
      <div className="heading">Part-III Attendence</div>
      <div id="table">
        <Table
          striped
          bordered
          hover
          size="sm"
          className="table-responsive border border-dark"
        >
          <thead>
            <tr>
              <th rowSpan={2}></th>
              <th rowSpan={2}>No of Working Days</th>
              <th rowSpan={2}>No of Total Days</th>
              <th rowSpan={2}>Percentage</th>
            </tr>
          </thead>

          <tbody>
            {data.attendence.map((e) => (
              <tr key={e.id}>
                <td className="term">{e.term}</td>
                <td className="term">{e.working}</td>
                <td className="term">{e.total}</td>
                <td className="term">{(e.working / e.total) * 100}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ThirdPart;
