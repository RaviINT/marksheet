import React from "react";
import "../../styles/part_2/SecondPart.css";
import Table from "react-bootstrap/Table";
import data from "../../data/data.json";
function SecondPart() {
  return (
    <div id="box">
      <div id="part_2">Part-II Co-Scholastic Areas</div>
      <Table
        striped
        bordered
        hover
        size="md"
        className="table-responsive border border-dark"
      >
        <thead>
          <tr>
            <th rowSpan={1}></th>
            <th rowSpan={1} style={{ fontSize: "20px", paddingTop: "42px" }}>
              Grade
            </th>
          </tr>
        </thead>

        <tbody>
          {data.part_2.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.grade}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SecondPart;
